import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../assets/styles/Projects.module.css';

import Container from '../../components/layout/Container';
import LinkButton from '../../components/ui/LinkButton';
import Message from '../../components/ui/Message';

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
