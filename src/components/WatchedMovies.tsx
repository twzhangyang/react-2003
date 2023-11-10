import React from "react";
import {WatchedMovieModel} from "./movieTypes";
import {watchedMovieModel} from "../MovieDetails";

export const WatchedMovies: React.FC<{ watched: ReadonlyArray<watchedMovieModel> }> = ({watched}) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID}></WatchedMovie>
            ))}
        </ul>
    )
}

const WatchedMovie: React.FC<{ movie: watchedMovieModel }> = ({movie}) => {
    return (<li key={movie.imdbID}>
            <img src={movie.poster} alt={`${movie.title} poster`}/>
            <h3>{movie.title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
            </div>
        </li>
    )
}
