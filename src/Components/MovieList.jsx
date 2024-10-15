import React from 'react';
import './MovieList.css';

// Updated hardcodedMovies array with Avengers films
const hardcodedMovies = [
  {
    imdbID: 'tt0848228',
    Title: 'The Avengers',
    Year: '2012',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt2395427',
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt4154756',
    Title: 'Avengers: Infinity War',
    Year: '2018',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt4154796',
    Title: 'Avengers: Endgame',
    Year: '2019',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'
  }
];

// Rest of your MovieList component remains the same
// MovieList component definition
function MovieList() {
  return (
    // Container for the entire list of movies
    <div className="movie-list">
      {/* Map through the hardcodedMovies array to create a card for each movie */}
      {hardcodedMovies.map((movie) => (
        // Individual movie card container
        // The key prop is used by React for efficient list rendering
        <div key={movie.imdbID} className="movie-card">
          {/* Movie poster image */}
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
          {/* Container for movie text information */}
          <div className="movie-info">
            {/* Movie title */}
            <h3 className="movie-title">{movie.Title}</h3>
            {/* Movie release year */}
            <p className="movie-year">Year: {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Export the MovieList component for use in other parts of the application
export default MovieList;