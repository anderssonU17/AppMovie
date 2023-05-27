import React, { useEffect, useState } from 'react';
import { searchMovies, getMovieDetails } from './movies/api/ApiMovie';
import { SearchForm } from './movies/components/SearchForm';
import { MovieList } from './movies/components/MovieList';
import { MovieDetails } from './movies/components/MovieDetails';
import './App.css';


export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const search = async () => {
      if (searchTerm) {
        const searchResults = await searchMovies(searchTerm);
        setMovies(searchResults);
      } else {
        setMovies([]);
      }
    };

    search();
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setSelectedMovie(null);
  };

  const handleMovieClick = async (movie) => {
    const movieDetails = await getMovieDetails(movie.imdbID);
    setSelectedMovie(movieDetails);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Búsqueda de Películas</h1>
      <SearchForm onSearch={handleSearch} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};