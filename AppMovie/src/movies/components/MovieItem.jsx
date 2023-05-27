import React from 'react';

export const MovieItem = ({ movie, onClick }) => {
  return (
    <div className="card animate__animated animate__fadeIn" onClick={onClick}>
      <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary">Más detalles</button>
      </div>
    </div>
  );
};
