import React from "react";
import "./App.css";
import {Logo, Navbar, Search, SearchResult} from "./components/Navbar";
import {MovieList, MoviePanel} from "./components/MoviePanel";
import {WatchedMoviePanel} from "./components/WatchedMoviePanel";
import {tempMovieData} from "./data/tempData";

export default function App() {
    return (
        <>
            <Navbar>
                <Logo></Logo>
                <Search></Search>
                <SearchResult movies={tempMovieData}></SearchResult>
            </Navbar>
            <main className="main">
                {/*<MoviePanel>*/}
                {/*    <MovieList movies={tempMovieData}/>*/}
                {/*</MoviePanel>*/}

                <MoviePanel element={
                    <>
                        <p>Passing component by element</p>
                        <MovieList movies={tempMovieData}/>
                    </>
                }/>
                <WatchedMoviePanel></WatchedMoviePanel>
            </main>
        </>
    );
}


