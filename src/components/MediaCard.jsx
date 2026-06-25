import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/MediaCard.module.css'

function MediaCard({ item, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate()

  return (
    <article className={styles.card}>
      <img src={item.image} alt={item.title} />

      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p>{item.type} • {item.genre}</p>
        <p>Ano: {item.year}</p>
        <p>Nota: {item.rating}</p>

        <div className={styles.actions}>
          <button onClick={() => navigate(`/detalhes/${item.id}`)}>
            Ver detalhes
          </button>

          <button onClick={() => onToggleFavorite(item)}>
            {isFavorite ? 'Remover' : 'Favoritar'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default MediaCard