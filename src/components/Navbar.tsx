import React, {ReactNode, useRef, useState} from "react";
import {MovieModel} from "./movieTypes";
import {useKey} from "../hooks/useKey";

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

type SearchProps = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const Search: React.FC<SearchProps> = ({query, setQuery}) => {
    const inputEl = useRef<HTMLInputElement>(null);
    useKey('Enter', () => {
        if (document.activeElement === inputEl.current) {
            return;
        }

        inputEl.current?.focus();
        setQuery('');
    })

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEl}
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
