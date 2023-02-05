import PropTypes from 'prop-types';
import React from 'react';

import styles from './Container.module.css';

/* Esse componente é uma div personalizada.
Ele passa estilos de maneira dinâmica para seus componentes filhos. */
export default function Container({ customClass, children }) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

Container.defaultProps = {
  customClass: '',
};
