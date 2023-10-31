import {tempMovieData, tempWatchedData} from "../data/tempData";

type MovieList = typeof tempMovieData;
export type MovieModel = MovieList[number];

type WatchedMovieList = typeof tempWatchedData;
export type WatchedMovieModel = WatchedMovieList[number];