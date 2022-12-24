import React from 'react';
import styles from './NewProject.module.css';

import ProjectForm from '../forms/ProjectForm';

export default function NewProject() {
  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm buttonText="Criar projeto" />
    </div>
  );
}
