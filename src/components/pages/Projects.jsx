import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Projects.module.css';

import Container from '../layout/Container';
import LinkButton from '../LinkButton';
import Message from '../Message';

export default function Projects() {
  const location = useLocation();
  const { state } = location;

  let message = '';

  if (state) {
    message = state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>

        <LinkButton
          to="/new-project"
          text="Novo Projeto"
        />
      </div>

      {message && (
        <Message
          message={message}
          type="success"
        />
      )}

      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
}
