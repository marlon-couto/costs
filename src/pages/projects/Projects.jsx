import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteProjectById, getProjects } from '../../helpers/fetchAPI';
import styles from '../../assets/styles/Projects.module.css';

import Container from '../../components/layout/Container';
import LinkButton from '../../components/layout/LinkButton';
import Loading from '../../components/layout/Loading';
import Message from '../../components/layout/Message';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectMessage, setProjectMessage] = useState('');
  const { state } = useLocation();

  let message = '';

  if (state) {
    message = state.message;
  }

  useEffect(() => {
    setTimeout(async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    }, 1000);
  }, []);

  const removeProject = useCallback(async (id) => {
    const projectDeleted = await deleteProjectById(id);
    if (projectDeleted) {
      setProjects(projects.filter((project) => project.id !== id));
      setProjectMessage('Projeto removido com sucesso');
    }
  }, [projects]);

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
          && projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}

        {loading && <Loading />}

        {!loading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}
