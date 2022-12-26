import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../assets/styles/NewProject.module.css';
import ProjectForm from './ProjectForm';

export default function NewProject() {
  const history = useHistory();

  const createPost = useCallback((project) => {
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
      .then(() => {
        history.push('/projects', { message: 'Projeto criado com sucesso!' });
      })
      .catch((error) => error.message);
  }, []);

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>

      <ProjectForm onSubmit={createPost} buttonText="Criar projeto" />
    </div>
  );
}
