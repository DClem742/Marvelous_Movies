import React, { useState } from 'react';
import ReviewForm from './ReviewForm';

function MovieDetails({ movie }) {
  const [userReviews, setUserReviews] = useState([]);

  const handleSubmitReview = (review) => {
    setUserReviews([...userReviews, review]);
  };

  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>OMDB Rating: {movie.imdbRating}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      
      <h3>User Reviews</h3>
      {userReviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
      
      <ReviewForm onSubmitReview={handleSubmitReview} />
    </div>
  );
}

export default MovieDetails;