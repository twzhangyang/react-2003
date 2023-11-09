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
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchMovies = async () => {
            const result = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=interstellar`)
            const json = await result.json();
            setMovies(json.Search);
            setIsLoading(false);
        }

        fetchMovies();
    }, []);

    return (
        <>
            <Navbar>
                <Logo></Logo>
                <Search></Search>
                <SearchResult movies={movies}></SearchResult>
            </Navbar>
            <StarRating maxRating={10}></StarRating>
            <main className="main">
                {/*<MoviePanel>*/}
                {/*    <MovieList movies={tempMovieData}/>*/}
                {/*</MoviePanel>*/}

                {
                    isLoading ? <Loading/> : <MoviePanel element={
                        <>
                            <p>Passing component by element</p>
                            <MovieList movies={movies}/>
                        </>
                    }/>
                }

                <WatchedMoviePanel></WatchedMoviePanel>
            </main>
        </>
    );
}

const Loading = () => {
    return (
        <p>Loading</p>
    )
}


