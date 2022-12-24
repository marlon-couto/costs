import React from 'react';
import styles from './Select.module.css';

export default function Select({ text, name, handleChange, value, options }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
      >
        <option value="Selecione uma opção"></option>
      </select>
    </div>
  );
}
