import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './MovieCard.module.css';
import { getMovieTrailer } from '../services/youtubeApi';

function MovieCard({ movie }) {
  const [flipped, setFlipped] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleWatchTrailer = async (e) => {
    e.stopPropagation();
    const videoId = await getMovieTrailer(movie.Title);
    if (videoId) {
      setTrailerUrl(`https://www.youtube.com/watch?v=${videoId}`);
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    } else {
      alert('Trailer not found');
    }
  };

  return (
    <div className={styles['movie-card']} onClick={() => setFlipped(state => !state)}>
      <animated.div className={styles['card-front']} style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <img src={movie.Poster} alt={movie.Title} className={styles['movie-poster']} />
      </animated.div>
      <animated.div className={styles['card-back']} style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}>
        <div className={styles['movie-info']}>
          <h2 className={styles['movie-title']}>{movie.Title}</h2>
          <p className={styles['movie-year']}>{movie.Year}</p>
          <p className={styles['movie-rating']}>Rating: {movie.imdbRating}</p>
          <p className={styles['movie-plot']}>{movie.Plot}</p>
          <button onClick={handleWatchTrailer} className={styles['trailer-button']}>Show Trailer</button>
        </div>
      </animated.div>
    </div>
  )
}

export default MovieCard