import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
    setTerm(''); // This line clears the input field after search
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter movie title"
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchForm;