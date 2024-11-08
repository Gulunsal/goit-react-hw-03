import React from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
          className={styles.input}
        />
      </label>
    </div>
  );
}

export default SearchBox;
