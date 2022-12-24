import React from 'react';
import styles from './Input.module.css';

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleChange,
  value,
}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
