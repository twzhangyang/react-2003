import React, {useState} from "react";
import {MovieModel} from "./movieTypes";
import {tempMovieData} from "../data/tempData";

export const MoviePanel: React.FC<{ element: React.ReactElement }> = ({element}) => {
    // const [movies, setMovies] = useState<ReadonlyArray<MovieModel>>(tempMovieData);
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && element}
        </div>
    )
}

export const MovieList: React.FC<{ movies: ReadonlyArray<MovieModel> }> = ({movies}) => {
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID}></Movie>
            ))}
        </ul>
    );
};

const Movie: React.FC<{ movie: MovieModel }> = ({movie}) => {
    return (
        <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    )
}
