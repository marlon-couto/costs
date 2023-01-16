import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styles from '../../assets/styles/Message.module.css';

export default function Message({ message, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return false;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  if (!visible) return '';

  return <div className={`${styles.message} ${styles[type]}`}>{message}</div>;
}

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
