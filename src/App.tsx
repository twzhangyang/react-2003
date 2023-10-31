import React, {useState} from "react";
import "./App.css";
import {tempWatchedData} from "./data/tempData";
import {WatchedMovieSummary} from "./components/WatchedMovieSummary";
import {WatchedMovies} from "./components/WatchedMovies";
import {WatchedMovieModel} from "./components/movieTypes";
import {Navbar} from "./components/Navbar";
import {MoviePanel} from "./components/MoviePanel";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <main className="main">
                <MoviePanel></MoviePanel>
                <WatchedMoviePanel></WatchedMoviePanel>
            </main>
        </>
    );
}


const WatchedMoviePanel = () => {
    const [isOpen2, setIsOpen2] = useState(true);
    const [watched, setWatched] = useState<ReadonlyArray<WatchedMovieModel>>(tempWatchedData);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <WatchedMovieSummary watched={watched}></WatchedMovieSummary>
                    <WatchedMovies watched={watched}></WatchedMovies>
                </>
            )}
        </div>
    )
}


