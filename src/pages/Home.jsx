import React from 'react';
import savings from '../../assets/savings.svg';
import styles from './Home.module.css';

import LinkButton from '../LinkButton';

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>

      <p>Comece a gerenciar seus projetos agora mesmo!</p>

      <LinkButton
        to="/new-project"
        text="Novo Projeto"
      />

      <img
        src={savings}
        alt="Costs"
      />
    </section>
  );
}
