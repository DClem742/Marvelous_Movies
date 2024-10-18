import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import MovieList from './Components/MovieList';
import SearchForm from './Components/SearchForm';
import MovieDetails from './Components/MovieDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [audio] = useState(new Audio('Avengers_Assemble.mp3'));

  const titleAnimation = useSpring({
    from: { transform: 'scale(0.1)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 1000 }
  });

  const formAnimation = useSpring({
    from: { transform: 'scale(1.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { ...config.wobbly, duration: 800 },
    delay: 2000 // This will make the form animation start after the title animation
  });

  useEffect(() => {
    audio.loop = true;

    // Cleanup function to stop the audio when component unmounts
    return () => {
      audio.pause();
    };
  }, [audio]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedMovie(null);
    audio.play();
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