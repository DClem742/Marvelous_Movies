import React, { useState } from 'react';
import styles from './SearchForm.module.css';

// SearchForm component: Handles user input for movie searches
function SearchForm({ onSearch }) {
  // State to manage the search term input
  const [term, setTerm] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['search-form']}>
      {/* Input field for search term */}
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter movie title"
        className={styles['search-input']}
      />
      {/* Submit button for the search form */}
      <button type="submit" className={styles['search-button']}>Search</button>
    </form>
  );
}

export default SearchForm;