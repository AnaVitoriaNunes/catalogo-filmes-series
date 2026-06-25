import React from 'react'
import styles from '../styles/SearchBar.module.css'

function SearchBar({ searchText, onSearchTextChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Buscar por título..."
      value={searchText}
      onChange={(event) => onSearchTextChange(event.target.value)}
    />
  )
}

export default SearchBar