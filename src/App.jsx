import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import MovieList from './Components/MovieList';
import SearchForm from './Components/SearchForm';
import MovieDetails from './Components/MovieDetails';
import MusicToggle from './Components/MusicToggle';
import styles from './Components/MusicToggle.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [audio] = useState(new Audio('Avengers_Assemble.mp3'));
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showMusicToggle, setShowMusicToggle] = useState(false);

  const titleAnimation = useSpring({
    from: { transform: 'scale(0.1)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 1000 }
  });

  const formAnimation = useSpring({
    from: { transform: 'scale(1.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { ...config.wobbly, duration: 800 },
    delay: 2000
  });

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    if (!isMusicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedMovie(null);
    audio.play();
    setIsMusicPlaying(true);
    setShowMusicToggle(true);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <animated.h1 style={titleAnimation} className="centered-title">
        Marvelous Movies
      </animated.h1>
      <animated.div style={formAnimation}>
        <SearchForm onSearch={handleSearch} />
        {showMusicToggle && (
          <div className={styles.toggleWrapper}>
            <MusicToggle isPlaying={isMusicPlaying} toggleMusic={toggleMusic} />
          </div>
        )}
      </animated.div>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <MovieList searchTerm={searchTerm} onSelectMovie={handleSelectMovie} />
      )}
    </div>
  );
}

export default App;