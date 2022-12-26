import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/Container.module.css';

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
