import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ProjectForm from './ProjectForm';

import { postProjects } from '../../helpers/fetchAPI';
import styles from './NewProject.module.css';

export default function NewProject() {
  const history = useHistory();

  const createPost = useCallback(async (project) => {
    const createdProject = { ...project, cost: 0, services: [] };
    const postedProject = await postProjects(createdProject);

    if (postedProject) {
      history.push('/projects', { message: 'Projeto criado com sucesso!' });
    }
  }, []);

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} buttonText="Criar projeto" />
    </div>
  );
}
