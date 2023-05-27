import React from 'react';
import { MovieItem } from './MovieItem';


export const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-4 mb-4" key={movie.imdbID}>
          <MovieItem movie={movie} onClick={() => onMovieClick(movie)} />
        </div>
      ))}
    </div>
  );
};