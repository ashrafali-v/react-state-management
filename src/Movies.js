import React, { useContext } from 'react';
import Movie from './Movie'
import {MovieContext} from './MoviesContext'
const Movies = () => {
    const { movies, users } = useContext(MovieContext);
    const [movieDetails,setMovieDetails] = movies;
    const [userDetails,setUserDetails] = users;
    //const [movies,setmovies] = useContext(MovieContext);
    return (
        <div>
            {movieDetails.map(movie=>(
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
            
        </div>
    );
}

export default Movies;