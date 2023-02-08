import React from 'react';
import LinkButton from '../components/LinkButton';

import savings from '../img/savings.svg';
import styles from './Home.module.css';

// Contém o texto de boas-vindas e o botão para criar um novo projeto
export default function Home() {
  return (
    <main className={styles.home_container}>
      <h1>
        Bem-vindo ao
        {' '}
        <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/new-project" text="Novo Projeto" />
      <img src={savings} alt="Costs" />
    </main>
  );
}
