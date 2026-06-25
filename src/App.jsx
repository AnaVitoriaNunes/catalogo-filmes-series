import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Series from './pages/Series.jsx'
import Favorites from './pages/Favorites.jsx'
import Details from './pages/Details.jsx'

import { mediaData } from './data/mediaData.js'
import styles from './styles/App.module.css'

function App() {
 
  // Lift State Up: o estado de favoritos fica no componente pai App
  // e é compartilhado com as páginas Filmes, Séries e Favoritos.
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (item) => {
    const exists = favorites.some((favorite) => favorite.id === item.id)

    if (exists) {
      setFavorites(favorites.filter((favorite) => favorite.id !== item.id))
    } else {
      setFavorites([...favorites, item])
    }
  }

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home items={mediaData} />} />

          <Route
            path="/filmes"
            element={
              <Movies
                items={mediaData}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/series"
            element={
              <Series
                items={mediaData}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favoritos"
            element={
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          <Route path="/detalhes/:id" element={<Details items={mediaData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App