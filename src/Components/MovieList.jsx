import React from 'react';
import './MovieList.css'; 

// Hardcoded array of movies
// This array contains movie objects with properties like imdbID, Title, Year, and Poster
const hardcodedMovies = [
  {
    imdbID: 'tt0111161',
    Title: 'The Shawshank Redemption',
    Year: '1994',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0068646',
    Title: 'The Godfather',
    Year: '1972',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0071562',
    Title: 'The Godfather: Part II',
    Year: '1974',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
  }
];

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