import React from 'react';
import styles from './SubmitButton.module.css';

export default function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
}
