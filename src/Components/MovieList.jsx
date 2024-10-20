import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

// API key for OMDB API
const API_KEY = '6ba10e55'; 

function MovieList({ searchTerm, onSelectMovie }) {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        // Fetch search results from OMDB API
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

  // Create animation trail for movie cards
  const trail = useTrail(movies.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { mass: 1, tension: 280, friction: 20 },
  });

  return (
    <div className={styles['movie-list']}>
      {/* Render animated movie cards */}
      {trail.map((props, index) => (
        <animated.div key={movies[index].imdbID} style={props}>
          <MovieCard
            movie={movies[index]}
            onSelect={() => onSelectMovie(movies[index])}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default MovieList;