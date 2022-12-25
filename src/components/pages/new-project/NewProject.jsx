import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NewProject.module.css';

import ProjectForm from '../../project-form/ProjectForm';

export default function NewProject() {
  const history = useHistory();

  const createPost = useCallback(
    (project) => {
      project.cost = 0;
      project.services = [];

      fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((response) => response.json())
        .then((_data) =>
          history.push('/projects', { message: 'Projeto criado com sucesso!' })
        )
        .catch((error) => console.log(error));
    },
    [history]
  );

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>

      <ProjectForm
        onSubmit={createPost}
        buttonText="Criar projeto"
      />
    </div>
  );
}
