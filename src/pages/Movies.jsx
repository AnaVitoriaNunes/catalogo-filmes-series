import React, { useState } from 'react'
import MediaCard from '../components/MediaCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import EmptyMessage from '../components/EmptyMessage.jsx'
import styles from '../styles/Pages.module.css'

function Movies({ items, favorites, onToggleFavorite }) {
  const [searchText, setSearchText] = useState('')

  const movies = items.filter((item) => item.type === 'Filme')

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <main className={styles.page}>
      <h1>Filmes</h1>

      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />

      {filteredMovies.length === 0 ? (
        <EmptyMessage message="Nenhum filme encontrado." />
      ) : (
        <div className={styles.grid}>
          {filteredMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              item={movie}
              isFavorite={favorites.some((favorite) => favorite.id === movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Movies