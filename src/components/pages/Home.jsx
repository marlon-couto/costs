import React from 'react';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>

      <p>Comece a gerenciar seus projetos agora mesmo!</p>

      <LinkButton
        to="/projects"
        text="Criar Projeto"
      />

      <img
        src={savings}
        alt="Costs"
      />
    </section>
  );
}
