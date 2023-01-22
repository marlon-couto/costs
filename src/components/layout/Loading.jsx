import React from "react";

import styles from "../../assets/styles/Loading.module.css";
import loading from "../../assets/img/loading.svg";

/* Exibe um ícone enquanto a página não carrega. */
export default function Loading() {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt="Carregando" className={styles.loader} />
    </div>
  );
}
