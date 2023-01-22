import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../assets/styles/Select.module.css';

/* Esse componente renderiza um menu dropdown com opções determinadas pela prop recebida.
As props determinam também o texto da label, o identificador da tag e o valor selecionado.
Uma função é executada quando uma opção é selecionada. */
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

        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  name: PropTypes.string,
  handleChange: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string,
}.isRequired;
