import React from 'react';

import loading from '../img/loading.svg';
import styles from './Loading.module.css';

// Exibe um ícone enquanto a página não carrega
export default function Loading() {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt="Carregando" className={styles.loader} />
    </div>
  );
}
