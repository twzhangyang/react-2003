import React from "react";
import "./App.css";
import {Logo, Navbar, Search, SearchResult} from "./components/Navbar";
import {MoviePanel} from "./components/MoviePanel";
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
                <MoviePanel></MoviePanel>
                <WatchedMoviePanel></WatchedMoviePanel>
            </main>
        </>
    );
}


