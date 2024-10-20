import React from 'react';
import styles from './MusicToggle.module.css';

// MusicToggle component: Renders a toggle switch for music playback control
function MusicToggle({ isPlaying, toggleMusic }) {
  return (
    <div className={styles.toggleContainer}>
      {/* Toggle switch */}
      <label className={styles.switch}>
        {/* Checkbox input for toggle state */}
        <input type="checkbox" checked={isPlaying} onChange={toggleMusic} />
        {/* Visual slider element */}
        <span className={styles.slider}></span>
      </label>
      {/* Label indicating current music state */}
      <span className={styles.label}>{isPlaying ? 'Music On' : 'Music Off'}</span>
    </div>
  );
}

export default MusicToggle;
