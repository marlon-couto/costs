import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/Input.module.css';

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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
