import React, { useState } from 'react'
import styles from '../styles/Roulette.module.css'

function RecommendationRoulette({ items }) {
  const [selectedItem, setSelectedItem] = useState(null)

  const drawItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length)
    setSelectedItem(items[randomIndex])
  }

  return (
    <section className={styles.roulette}>
      <div>
        <h2>Roleta de Recomendação</h2>
        <p>Clique no botão e descubra uma indicação para assistir hoje.</p>

        <button onClick={drawItem}>🎲 Sortear recomendação</button>
      </div>

      {selectedItem && (
        <div className={styles.result}>
          <img src={selectedItem.image} alt={selectedItem.title} />

          <div>
            <span>Recomendação sorteada</span>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.type} • {selectedItem.genre}</p>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default RecommendationRoulette