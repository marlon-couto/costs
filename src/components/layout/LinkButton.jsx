import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/LinkButton.module.css';

/* Renderiza um botão que direciona o usuário para outra rota na aplicação. */
export default function LinkButton({ to, text }) {
  return (
    <Link to={to} className={styles.button}>
      {text}
    </Link>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}.isRequired;
