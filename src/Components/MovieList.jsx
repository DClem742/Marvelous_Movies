import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

const API_KEY = '6ba10e55'; 

function MovieList({ searchTerm, onSelectMovie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        // Fetch search results
        const response = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Search) {
          // Fetch detailed information for each movie
          const detailedMovies = await Promise.all(
            data.Search.map(async (movie) => {
              const detailResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
              return detailResponse.json();
            })
          );
          setMovies(detailedMovies);
        } else {
          setMovies([]);
        }
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className={styles['movie-list']}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={() => onSelectMovie(movie)} />
      ))}
    </div>
  );
}

export default MovieList;