import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../styles/Pages.module.css'

function Details({ items }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const item = items.find((media) => media.id === Number(id))

  if (!item) {
    return (
      <main className={styles.page}>
        <h1>Item não encontrado</h1>
        <button onClick={() => navigate('/')}>Voltar para Home</button>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <button onClick={() => navigate(-1)}>← Voltar</button>

      <section className={styles.detailsCard}>
        <img src={item.image} alt={item.title} />

        <div className={styles.detailsInfo}>
          <span className={styles.badge}>{item.type}</span>

          <h1>{item.title}</h1>

          <div className={styles.infoRow}>
            <p>{item.genre}</p>
            <p>{item.year}</p>
            <p>⭐ {item.rating}</p>
          </div>

          <p className={styles.description}>{item.description}</p>

          <button onClick={() => navigate(item.type === 'Filme' ? '/filmes' : '/series')}>
            Ver mais {item.type === 'Filme' ? 'filmes' : 'séries'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default Details