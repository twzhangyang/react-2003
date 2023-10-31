import React from "react";
import {WatchedMovieModel} from "./movieTypes";

export const WatchedMovies: React.FC<{ watched: ReadonlyArray<WatchedMovieModel> }> = ({watched}) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID}></WatchedMovie>
            ))}
        </ul>
    )
}

const WatchedMovie: React.FC<{ movie: WatchedMovieModel }> = ({movie}) => {
    return (<li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h3>{movie.Title}</h3>
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
