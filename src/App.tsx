import React, {useEffect, useState} from "react";
import "./App.css";
import {Logo, Navbar, Search, SearchResult} from "./components/Navbar";
import {MovieList, MoviePanel} from "./components/MoviePanel";
import {WatchedMoviePanel} from "./components/WatchedMoviePanel";
import {tempMovieData} from "./data/tempData";
import StarRating from "./components/StarRating";
import {MovieModel} from "./components/movieTypes";

export default function App() {

    const APIKey = process.env.REACT_APP_OMDB_API;
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setError('')

        const fetchMovies = async () => {
            try {
                const result = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=interstellar`)
                if (!result.ok) {
                    throw new Error('Something went wrong with fetching movies')
                }
                const json = await result.json();
                if (!json.Search) {
                    throw new Error('Movie not found')
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
    }, []);

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
                        <MovieList movies={movies}/>
                    </>
                }/>}

                <WatchedMoviePanel></WatchedMoviePanel>
            </main>
        </>
    );
}

const Loading = () => {
    return (
        <p className='loader'>Loading</p>
    )
}

const ErrorMessage: React.FC<{ message: string }> = ({message}) => {
    return (
        <p className='error'>
            <span>Error:</span> {message}
        </p>
    )
}


