import {useEffect, useState} from "react";
import Loader from "./components/Loader";
import {MovieModel} from "./components/movieTypes";
import StarRating from "./components/StarRating";
import {useKey} from "./hooks/useKey";

export type movieDetailModel = {
    Title: string,
    Year: string,
    Poster: string,
    Runtime: string,
    imdbRating: number,
    Plot: string,
    Released: string,
    Actors: string,
    Director: string,
    Genre: string,
};

export type watchedMovieModel = {
    imdbID: string,
    title: string,
    year: string,
    poster: string,
    imdbRating: number,
    runtime: number,
    userRating: number,
}

type movieDetailsProps = {
    selectedId: string,
    onCloseMovie: () => void,
    onAddWatched: (movie: watchedMovieModel) => void,
    watched: watchedMovieModel[],
}


const MovieDetails: React.FC<movieDetailsProps> = ({selectedId, onCloseMovie, onAddWatched, watched}) => {
    const [movie, setMovie] = useState<movieDetailModel | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
        (movie) => movie.imdbID === selectedId
    )?.userRating;

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie ?? {};

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbID: selectedId,
            title: title!,
            year: year!,
            poster: poster!,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime?.split(" ").at(0)),
            userRating,
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    };
    useKey("Escape", onCloseMovie);

    // useEffect(
    //     function () {
    //         function callback(e: any) {
    //             if (e.code === "Escape") {
    //                 onCloseMovie();
    //             }
    //         }
    //
    //         document.addEventListener("keydown", callback);
    //
    //         return function () {
    //             document.removeEventListener("keydown", callback);
    //         };
    //     },
    //     [onCloseMovie]
    // );

    useEffect(
        function () {
            const APIKey = process.env.REACT_APP_OMDB_API;
            async function getMovieDetails() {
                setIsLoading(true);
                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${APIKey}&i=${selectedId}`
                );
                const data = await res.json();
                console.log(data)
                setMovie(data);
                setIsLoading(false);
            }

            getMovieDetails();
        },
        [selectedId]
    );

    useEffect(
        function () {
            if (!title) return;
            document.title = `Movie | ${title}`;

            return function () {
                document.title = "usePopcorn";
                // console.log(`Clean up effect for movie ${title}`);
            };
        },
        [title]
    );

    return (
        <div className="details">
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`Poster of ${movie} movie`}/>
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐️</span>
                                {imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className="rating">
                            {!isWatched ? (
                                <>
                                    <StarRating
                                        maxRating={10}
                                        size={24}
                                        onSetRating={setUserRating}
                                    />
                                    {userRating > 0 && (
                                        <button className="btn-add" onClick={handleAdd}>
                                            + Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>
                                    You rated with movie {watchedUserRating} <span>⭐️</span>
                                </p>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
        </div>
    );
}

export default MovieDetails;
