import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/SubmitButton.module.css';

export default function SubmitButton({ text }) {
  return (
    <div className={styles.button_container}>
      <button className={styles.button} type="submit">
        {text}
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};
