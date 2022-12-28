import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../assets/styles/ProjectDetails.module.css';

import Container from '../../components/layout/Container';
import Loading from '../../components/layout/Loading';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

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

  if (!project.name) return <Loading />;

  return (
    <div className={styles.project_details}>
      <Container customClass="column">
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
              <p>Formulário de edição</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
