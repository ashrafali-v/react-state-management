import React, { useState, createContext } from 'react';
export const MovieContext = createContext();
export const MovieProvider = props => {
    const [movieDetails, setMovieDetails] = useState([
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

    const [userDetails, setUserDetails] = useState([
        {
            name: "John",
            age: 25,
            id: 1
        }, 
        {
            name: "Jacob",
            age: 35,
            id: 2
        },
        {
            name: "Terry",
            age: 45,
            id: 3
        }
    ]);
    
    return <MovieContext.Provider value={{movies:[movieDetails, setMovieDetails],users:[userDetails,setUserDetails]}}>
        {props.children}
    </MovieContext.Provider>
    // return <MovieContext.Provider value={[movies, setMovies]}>
    //     {props.children}
    // </MovieContext.Provider>


}