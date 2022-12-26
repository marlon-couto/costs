import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/SubmitButton.module.css';

export default function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.button} type="button">
        {text}
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};
