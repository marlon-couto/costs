import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../assets/styles/ProjectDetails.module.css';

import Container from '../../components/layout/Container';
import Loading from '../../components/layout/Loading';
import Message from '../../components/layout/Message';
import ProjectForm from './ProjectForm';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProject(data);
        })
        .catch((error) => error.message);
    }, 1000);
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const editPost = useCallback((updatedProject) => {
    if (updatedProject.budget < updatedProject.cost) {
      setMessage('O custo do projeto não pode ser maior que o orçamento!');
      setType('error');
      return false;
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage('Projeto atualizado!');
        setType('success');
      })
      .catch((error) => error.message);

    return true;
  }, []);

  if (!project.name) return <Loading />;

  return (
    <div className={styles.project_details}>
      <Container customClass="column">
        {message && <Message type={type} message={message} />}

        <div className={styles.details_container}>
          <h1>{`Projeto: ${project.name}`}</h1>

          <button
            className={styles.button}
            onClick={toggleProjectForm}
            type="button"
          >
            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
          </button>

          {!showProjectForm ? (
            <div className={styles.project_info}>
              <p>
                <span>Categoria:</span>
                {project.category.name}
              </p>

              <p>
                <span>Total de orçamento:</span>
                {`R$ ${project.budget}`}
              </p>

              <p>
                <span>Total utilizado:</span>
                {`R$ ${project.cost}`}
              </p>
            </div>
          ) : (
            <div className={styles.project_info}>
              <ProjectForm
                onSubmit={editPost}
                projectData={project}
                buttonText="Concluir edição"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
