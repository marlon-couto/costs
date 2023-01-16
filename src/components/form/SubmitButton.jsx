import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../assets/styles/SubmitButton.module.css';

export default function SubmitButton({ text, disabled }) {
  return (
    <div className={styles.button_container}>
      <button className={styles.button} type="submit" disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
}.isRequired;
