import React, { useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './MovieCard.module.css';
import { getMovieTrailer } from './YouTubeApi';

// MovieCard component receives a movie object as a prop
function MovieCard({ movie }) {
  // State hooks for managing the card's flip animation, trailer URL, and visibility
  const [flipped, setFlipped] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  // useSpring hook for creating smooth flip animation
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // useCallback hook to memoize the handleWatchTrailer function
  const handleWatchTrailer = useCallback(async (e) => {
    e.stopPropagation(); // Prevent card flip when clicking the button
    const videoId = await getMovieTrailer(movie.Title);
    if (videoId) {
      setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
      setShowTrailer(true);
    } else {
      alert('Trailer not found');
    }
  }, [movie.Title]);

  return (
    // Main container for the movie card, flips on click
    <div className={styles['movie-card']} onClick={() => setFlipped(state => !state)}>
      {/* Front side of the card */}
      <animated.div className={styles['card-front']} style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <img src={movie.Poster} alt={movie.Title} className={styles['movie-poster']} />
      </animated.div>
      {/* Back side of the card */}
      <animated.div className={styles['card-back']} style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}>
        {showTrailer ? (
          // Trailer container, shown when showTrailer is true
          <div className={styles['trailer-container']}>
            <iframe
              width="100%"
              height="100%"
              src={trailerUrl}
              frameBorder="0"
              allowFullScreen
              title={`${movie.Title} trailer`}
            ></iframe>
            <button onClick={() => setShowTrailer(false)} className={styles['close-trailer-button']}>Close Trailer</button>
          </div>
        ) : (
          // Movie info container, shown when showTrailer is false
          <div className={styles['movie-info']}>
            <h2 className={styles['movie-title']}>{movie.Title}</h2>
            <p className={styles['movie-year']}>{movie.Year}</p>
            <p className={styles['movie-rating']}>Rating: {movie.imdbRating}</p>
            <p className={styles['movie-plot']}>{movie.Plot}</p>
            <button onClick={handleWatchTrailer} className={styles['trailer-button']}>Show Trailer</button>
          </div>
        )}
      </animated.div>
    </div>
  );
}
export default MovieCard;