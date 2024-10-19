import React from 'react';
import styles from './MusicToggle.module.css';

function MusicToggle({ isPlaying, toggleMusic }) {
  return (
    <div className={styles.toggleContainer}>
      <label className={styles.switch}>
        <input type="checkbox" checked={isPlaying} onChange={toggleMusic} />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.label}>{isPlaying ? 'Music On' : 'Music Off'}</span>
    </div>
  );
}

export default MusicToggle;
