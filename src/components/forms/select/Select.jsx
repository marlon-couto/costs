import React from 'react';
import styles from './Select.module.css';

export default function Select({ text, name, onChange, value, categories }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        value={value || ''}
      >
        <option value="">Selecione uma opção</option>
        {categories.map((category) => {
          const { id, name } = category;
          return (
            <option
              value={id}
              key={id}
            >
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
