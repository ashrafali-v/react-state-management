import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import Navbar from './Navbar';
import { MovieProvider } from './MoviesContext'
import AddMovies from './AddMovie';
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Navbar />
        <AddMovies />
        <Movies />
      </MovieProvider>
    </div>
  );
}

export default App;
