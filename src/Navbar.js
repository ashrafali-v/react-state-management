import React, { useState,useContext } from 'react';
import { MovieContext } from './MoviesContext'

const Navbar = () => {
    const [movies, setmovies] = useContext(MovieContext);
    return (
        <div>
            <h3>Ashraf Ali</h3>
            <p>List of movies:{movies.length}</p>
        </div>
    );
}

export default Navbar;