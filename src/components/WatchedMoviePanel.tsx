import React, {useState} from "react";
import {WatchedMovieModel} from "./movieTypes";
import {tempWatchedData} from "../data/tempData";
import {WatchedMovieSummary} from "./WatchedMovieSummary";
import {WatchedMovies} from "./WatchedMovies";
import {watchedMovieModel} from "./MovieDetails";

type watchedMoviePanelProps = {
    watched: ReadonlyArray<watchedMovieModel>
};
export const WatchedMoviePanel: React.FC<watchedMoviePanelProps> = ({watched}) => {
    const [isOpen2, setIsOpen2] = useState(true);

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
