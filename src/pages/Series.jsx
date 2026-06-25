import React, { useState } from 'react'
import MediaCard from '../components/MediaCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import EmptyMessage from '../components/EmptyMessage.jsx'
import styles from '../styles/Pages.module.css'

function Series({ items, favorites, onToggleFavorite }) {
  const [searchText, setSearchText] = useState('')

  const series = items.filter((item) => item.type === 'Série')

  const filteredSeries = series.filter((serie) =>
    serie.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <main className={styles.page}>
      <h1>Séries</h1>

      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />

      {filteredSeries.length === 0 ? (
        <EmptyMessage message="Nenhuma série encontrada." />
      ) : (
        <div className={styles.grid}>
          {filteredSeries.map((serie) => (
            <MediaCard
              key={serie.id}
              item={serie}
              isFavorite={favorites.some((favorite) => favorite.id === serie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Series