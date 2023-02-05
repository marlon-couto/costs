import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './Message.module.css';

/* Exibe uma mensagem do sistema ao criar e editar projetos
A mensagem desaparece após 3 segundos. */
export default function Message({ message, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return () => {};
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
