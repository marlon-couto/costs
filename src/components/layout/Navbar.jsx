import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/costs_logo.png';
import styles from './Navbar.module.css';

import Container from './Container';

/* Renderiza uma barra de navegação com links no cabeçalho da página. */
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>

          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>

          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
