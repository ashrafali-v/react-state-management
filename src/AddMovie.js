import React, { useState, useContext } from 'react';
import { MovieContext } from './MoviesContext'
const AddMovies = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    //const [Movies, setmovies] = useContext(MovieContext);
    const { movies, users } = useContext(MovieContext);
    const [movieDetails, setMovieDetails] = movies;
    const updateName = e => {
        setName(e.target.value)
    }
    const updatePrice = e => {
        setPrice(e.target.value)
    }
    const addMovie = e => {
        e.preventDefault();
        setMovieDetails(prevMovies => [...prevMovies, { name: name, price: price,id:prevMovies.length+1 }])
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}></input>
            <input type="text" name="price" value={price} onChange={updatePrice}></input>
            <button>Submit</button>
        </form>
    );
}

export default AddMovies;