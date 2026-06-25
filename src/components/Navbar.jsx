import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <h2>CineCatálogo</h2>

      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/filmes">Filmes</NavLink>
        <NavLink to="/series">Séries</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </nav>
    </header>
  )
}

export default Navbar