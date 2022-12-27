import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../assets/styles/Projects.module.css';

import Container from '../../components/layout/Container';
import LinkButton from '../../components/ui/LinkButton';
import Loading from '../../components/ui/Loading';
import Message from '../../components/ui/Message';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  const { state } = location;

  let message = '';

  if (state) {
    message = state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setLoading(false);
        })
        .catch((error) => error.message);
    }, 1000);
  }, []);

  const removeProject = useCallback((id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso');
      })
      .catch((error) => error.message);
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/new-project" text="Novo Projeto" />
      </div>

      {message && <Message message={message} type="success" />}
      {projectMessage && <Message message={projectMessage} type="success" />}

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
                handleRemove={removeProject}
              />
            );
          })}
        {loading && <Loading />}
        {!loading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}
