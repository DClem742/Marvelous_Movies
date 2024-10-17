import React from 'react';

function MovieCard({ movie, onSelect }) {
  return (
    // Clickable movie card
    <div className="movie-card" onClick={onSelect}>
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">Year: {movie.Year}</p>
        <p className="movie-rating">Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieCard;