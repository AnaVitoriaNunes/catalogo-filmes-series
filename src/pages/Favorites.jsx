import React from 'react'
import MediaCard from '../components/MediaCard.jsx'
import EmptyMessage from '../components/EmptyMessage.jsx'
import styles from '../styles/Pages.module.css'

function Favorites({ favorites, onToggleFavorite }) {
  return (
    <main className={styles.page}>
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <EmptyMessage message="Você ainda não adicionou nenhum favorito." />
      ) : (
        <div className={styles.grid}>
          {favorites.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favorites