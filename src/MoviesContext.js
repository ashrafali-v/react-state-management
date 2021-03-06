import React, { useState, createContext } from 'react';
export const MovieContext = createContext();
export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: '50$',
            id: 1
        }, {
            name: "Avatar",
            price: '100$',
            id: 2
        },
        {
            name: "Titanic",
            price: '100$',
            id: 3
        }
    ]);
    return <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>

}