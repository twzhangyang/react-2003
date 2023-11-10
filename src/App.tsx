import React, {useEffect, useState} from "react";
import "./App.css";
import {Logo, Navbar, Search, SearchResult} from "./components/Navbar";
import {MovieList, MoviePanel} from "./components/MoviePanel";
import {WatchedMoviePanel} from "./components/WatchedMoviePanel";
import {tempMovieData} from "./data/tempData";
import StarRating from "./components/StarRating";
import {MovieModel} from "./components/movieTypes";
import {isNumberObject} from "util/types";
import Loading from "./components/Loader";
import MovieDetails, {watchedMovieModel} from "./MovieDetails";

export default function App() {

    const APIKey = process.env.REACT_APP_OMDB_API;
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedId, setSelectedId] = useState<null | string>(null);
    const [watched, setWatched] = useState<watchedMovieModel[]>([])

    const handleSelectMovie = (id: string) => {
        setSelectedId((selectedId) => id === selectedId ? null : id)
    }

    const handleCloseMovie = () => {
        setSelectedId(null);
    }

    const handleAddWatched = (movie: watchedMovieModel) => {
        setWatched((watched) => [...watched, movie])
    }

    const handleDeletedWatched = (id: string) => {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id))
    }

    useEffect(() => {
        setIsLoading(true);
        setError('')

        const fetchMovies = async () => {
            try {
                const result = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=${query}`)
                if (!result.ok) {
                    throw new Error('Something went wrong with fetching movies')
                }
                const json = await result.json();

                if (json.Response === 'False' && json.Error === 'Incorrect IMDb ID.') {
                    return;
                }

                if (!json.Search) {
                    throw new Error('Movie not found');
                }
                setMovies(json.Search);
            } catch (e: any) {
                if (e.name !== 'AbortError') {
                    setError(e.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
        }

        fetchMovies();
    }, [query]);

    return (
        <>
            <Navbar>
                <Logo></Logo>
                <Search query={query} setQuery={setQuery}></Search>
                <SearchResult movies={movies}></SearchResult>
            </Navbar>
            <main className="main">
                {/*<MoviePanel>*/}
                {/*    <MovieList movies={tempMovieData}/>*/}
                {/*</MoviePanel>*/}
                {error && <ErrorMessage message={error}/>}
                {isLoading && <Loading></Loading>}
                {!error && !isLoading && <MoviePanel element={
                    <>
                        <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>
                    </>
                }/>}
                {selectedId && <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie}
                                             onAddWatched={handleAddWatched} watched={watched}/>}

                {!selectedId && <WatchedMoviePanel watched={watched}></WatchedMoviePanel>}
            </main>
        </>
    );
}


const ErrorMessage: React.FC<{ message: string }> = ({message}) => {
    return (
        <p className='error'>
            <span>Error:</span> {message}
        </p>
    )
}


