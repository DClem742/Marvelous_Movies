import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import SearchForm from './Components/SearchForm';
import MovieDetails from './Components/MovieDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [audio] = useState(new Audio('Avengers_Assemble.mp3'));

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
      <h1 className="centered-title">Marvelous Movies</h1>
      <SearchForm onSearch={handleSearch} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <MovieList searchTerm={searchTerm} onSelectMovie={handleSelectMovie} />
      )}
    </div>
  );
}

export default App;