import React from 'react';

// MovieDetails component: Displays detailed information about a movie
function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>OMDB Rating: {movie.imdbRating}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
    </div>
  );
}
export default MovieDetails;