import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../assets/styles/Projects.module.css';

import Container from '../../components/layout/Container';
import LinkButton from '../../components/ui/LinkButton';
import Message from '../../components/ui/Message';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  const { state } = location;

  let message = '';

  if (state) {
    message = state.message;
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => error.message);
  }, []);

  const handleRemove = useCallback(() => {
    console.log('teste');
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/new-project" text="Novo Projeto" />
      </div>

      {message && <Message message={message} type="success" />}

      <Container customClass="start">
        {projects.length > 0
          && projects.map((project) => {
            const {
              id, name, budget, category,
            } = project;
            return (
              <ProjectCard
                key={id}
                name={name}
                id={id}
                budget={budget}
                category={category.name}
                handleRemove={handleRemove}
              />
            );
          })}
      </Container>
    </div>
  );
}
