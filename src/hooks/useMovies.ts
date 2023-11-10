import {useEffect, useState} from "react";
import {MovieModel} from "../components/movieTypes";

export const useMovies = (query: string) => {
    const APIKey = process.env.REACT_APP_OMDB_API;

    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setError('')

        const fetchMovies = async () => {
            try {
                const result = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=${query}`)
                if (!result.ok) {
                    throw new Error('Something went wrong with fetching movies')
                }
                const json = await result.json();

                if (json.Response === 'False' && json.Error === 'Incorrect IMDb ID.') {
                    return;
                }

                if (!json.Search) {
                    throw new Error('Movie not found');
                }
                setMovies(json.Search);
            } catch (e: any) {
                if (e.name !== 'AbortError') {
                    setError(e.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
        }

        fetchMovies();
    }, [query])

    return {movies, isLoading, error}
}


