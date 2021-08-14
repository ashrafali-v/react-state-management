import React, { useContext } from 'react';
import { MovieContext } from './MoviesContext'

const Navbar = () => {
    //const [movies, setmovies] = useContext(MovieContext);
    const { movies, users } = useContext(MovieContext);
    const [movieDetails, setMovieDetails] = movies;
    return (
        <div>
            <h3>Ashraf Ali</h3>
            <p>List of movies:{movieDetails.length}</p>
        </div>
    );
}

export default Navbar;