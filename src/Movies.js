import React, { useState,useContext } from 'react';
import Movie from './Movie'
import {MovieContext} from './MoviesContext'
const Movies = () => {
    const [movies,setmovies] = useContext(MovieContext);
    return (
        <div>
            {movies.map(movie=>(
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
            
        </div>
    );
}

export default Movies;