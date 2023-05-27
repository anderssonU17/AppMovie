import React from 'react';

export const MovieDetails = ({ movie }) => {
    return (
      <div className="card mt-4 animate__animated animate__fadeIn">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={movie.Poster} alt={movie.Title} className="card-img animate__animated animate__fadeInLeft" />
        </div>
        <div className="col-md-8">
          <div className="card-body animate__animated animate__fadeInRight">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">
              <strong>Year:</strong> {movie.Year}
            </p>
            <p className="card-text">
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p className="card-text">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="card-text">
              <strong>Actors:</strong> {movie.Actors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
