import React from 'react';
import LinkButton from '../components/layout/LinkButton';

import savings from '../img/savings.svg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao
        {' '}
        <span>Costs</span>
      </h1>

      <p>Comece a gerenciar seus projetos agora mesmo!</p>

      <LinkButton to="/new-project" text="Novo Projeto" />

      <img src={savings} alt="Costs" />
    </section>
  );
}
