import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

// Renderiza ícones de redes sociais no rodapé da página
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>

      <p className={styles.copyright}>
        <span>Costs</span>
        &copy; 2022
      </p>
    </footer>
  );
}
