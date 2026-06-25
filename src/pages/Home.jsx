import React from 'react'
import RecommendationRoulette from '../components/RecommendationRoulette.jsx'
import styles from '../styles/Pages.module.css'

function Home({ items }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Catálogo de Filmes e Séries</h1>
        <p>
          Explore filmes, séries, favoritos e descubra novas recomendações
          usando uma SPA feita com React.
        </p>
      </section>

      <RecommendationRoulette items={items} />
    </main>
  )
}

export default Home