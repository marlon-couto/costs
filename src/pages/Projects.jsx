import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../components/layout/Container';
import LinkButton from '../components/LinkButton';
import Loading from '../components/Loading';
import Message from '../components/Message';
import ProjectCard from './projects/ProjectCard';

import { deleteProjectById, getProjects } from '../helpers/fetchAPI';
import styles from './Projects.module.css';

/* Esse componente renderiza os projetos salvos no banco de dados,
e exibe uma mensagem caso nenhum projeto seja encontrado.
É possível também remover um projeto. */
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectMessage, setProjectMessage] = useState('');
  const location = useLocation();

  // Retorna uma mensagem caso ela exista no state da rota
  const message = () => {
    if (location.state) return location.state.message;
    return '';
  };

  // Busca os projetos no banco de dados
  useEffect(() => {
    setTimeout(async () => {
      const data = await getProjects();

      setProjects(data);
      setLoading(false);
    }, 1000);
  }, []);

  // Remove um projeto do banco de dados
  const removeProject = useCallback(
    async (id) => {
      const projectDeleted = await deleteProjectById(id);

      if (projectDeleted) {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso');
      }
    },
    [projects],
  );

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/new-project" text="Novo Projeto" />
      </div>

      {/* Exibe uma mensagem do sistema vinda da rota ou do próprio
      componente caso exista alguma */}
      {message() && <Message message={message()} type="success" />}
      {projectMessage && <Message message={projectMessage} type="success" />}

      {/* Remapeia os projetos existentes no banco de dados e os exibe na página */}
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

        {/* Exibe uma mensagem caso não exista projetos no banco de dados
        após o carregamento da página */}
        {loading && <Loading />}
        {!loading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}
