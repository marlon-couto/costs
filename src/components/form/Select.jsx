import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/Select.module.css';

export default function Select({
  text,
  name,
  handleChange,
  value,
  categories,
}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>

      <select name={name} id={name} onChange={handleChange} value={value || ''}>
        <option value="">Selecione uma opção</option>
        {categories.map((category) => {
          const { id } = category;
          return (
            <option value={id} key={id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
