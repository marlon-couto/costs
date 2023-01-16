import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/LinkButton.module.css';

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
