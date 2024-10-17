import React, { useState } from 'react';
import styles from './SearchForm.module.css';

function SearchForm({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['search-form']}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter movie title"
        className={styles['search-input']}
      />
      <button type="submit" className={styles['search-button']}>Search</button>
    </form>
  );
}

export default SearchForm;