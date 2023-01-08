import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { parse, v4 as uuid } from 'uuid';
import styles from '../../assets/styles/ProjectDetails.module.css';

import Container from '../../components/layout/Container';
import Loading from '../../components/layout/Loading';
import Message from '../../components/layout/Message';
import ServiceForm from '../services/ServiceForm';
import ProjectForm from './ProjectForm';

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const {
    name, category, budget, services,
  } = project;

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

  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const editPost = useCallback((updatedProject) => {
    setMessage('');

    if (updatedProject.budget < updatedProject.cost) {
      setMessage('O custo do projeto não pode ser maior que o orçamento!');
      setMessageType('error');
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
        setMessageType('success');
      })
      .catch((error) => error.message);

    return true;
  }, []);

  const showTotalCost = useCallback(() => project.cost, [project.cost]);

  const createService = useCallback(() => {
    setMessage('');

    const lastService = services[services.length - 1];

    lastService.id = uuid();

    const newCost = parseFloat(project.cost) + parseFloat(lastService.cost);
    const projectBudget = parseFloat(budget);

    if (newCost > projectBudget) {
      setMessage(
        'Orçamento ultrapassado, por favor verifique o valor do serviço.',
      );
      setMessageType('error');
      services.pop();
      return;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error.message);
  }, [project]);

  if (!name) return <Loading />;

  return (
    <div className={styles.project_details}>
      <Container customClass="column">
        {message && <Message type={messageType} message={message} />}

        <div className={styles.details_container}>
          <h1>{`Projeto: ${name}`}</h1>

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
                <span>Categoria: </span>
                {category.name}
              </p>

              <p>
                <span>Total de orçamento: </span>
                {`R$ ${budget}`}
              </p>

              <p>
                <span>Total utilizado: </span>
                {`R$ ${showTotalCost()}`}
              </p>
            </div>
          ) : (
            <div className={styles.project_info}>
              <ProjectForm
                handleSubmit={editPost}
                projectData={project}
                buttonText="Concluir edição"
              />
            </div>
          )}
        </div>

        <div className={styles.service_form_container}>
          <h2>Adicione um serviço:</h2>

          <button
            className={styles.button}
            onClick={toggleServiceForm}
            type="button"
          >
            {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
          </button>

          <div className={styles.project_info}>
            {showServiceForm && (
              <ServiceForm
                buttonText="Adicionar serviço"
                handleSubmit={createService}
                projectData={project}
              />
            )}
          </div>
        </div>

        <h2>Serviços</h2>

        <Container customClass="start">
          <p>Serviços</p>
        </Container>
      </Container>
    </div>
  );
}
