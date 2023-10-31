import React, {ReactNode, useState} from "react";
import {MovieModel} from "./movieTypes";

export const Navbar: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <nav className="nav-bar">
            {children}
        </nav>
    )
}

export const SearchResult: React.FC<{movies: ReadonlyArray<MovieModel>}> = ({movies}) => {
    return (
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
        </p>
    )
}
export const Search = () => {
    const [query, setQuery] = useState<string>("");

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />

    )
}
export const Logo: React.FC = () => {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    )
}