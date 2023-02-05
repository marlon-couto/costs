import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { v4 as uuid } from 'uuid';

import {
  getProjectById,
  patchProject,
  patchProjectServices,
  putProject,
} from '../helpers/fetchAPI';

import styles from './ProjectDetails.module.css';

import Container from '../components/layout/Container';
import Loading from '../components/Loading';
import Message from '../components/Message';
import ServiceForm from './services/ServiceForm';
import ProjectForm from './projects/ProjectForm';
import ServiceCard from './services/ServiceCard';

// Renderiza os detalhes do projeto
export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // Define os dados do projeto e dos serviços
  useEffect(() => {
    const handleProject = async (projectId) => {
      const data = await getProjectById(projectId);

      setProject(data);
      setServices(data.services);
    };

    handleProject(id);
  }, [id]);

  // Define se o formulário de projeto será exibido ou não
  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  // Define se o formulário de serviço será exibido ou não
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  // Define a edição do projeto
  const editPost = useCallback(async (updatedProject) => {
    setMessage('');

    if (updatedProject.budget < updatedProject.cost) {
      setMessage('O custo do projeto não pode ser maior que o orçamento!');
      setMessageType('error');
      return false;
    }

    const data = await patchProject(id, updatedProject);

    setProject(data);
    setShowProjectForm(false);
    setMessage('Projeto atualizado!');
    setMessageType('success');

    return true;
  }, []);

  // Atualiza os custos do projeto
  const showTotalCost = useCallback(() => project.cost, [project.cost]);

  // Cria um novo serviço
  const createService = useCallback(async () => {
    const lastService = project.services[project.services.length - 1];
    const newCost = parseFloat(project.cost) + parseFloat(lastService.cost);
    const projectBudget = parseFloat(project.budget);

    lastService.id = uuid();
    setMessage('');

    if (newCost > projectBudget) {
      setMessage(
        'Orçamento ultrapassado, por favor verifique o valor do serviço.',
      );
      setMessageType('error');
      project.services.pop();
      return;
    }

    project.cost = newCost;
    await putProject(id, project);

    setShowServiceForm(false);
  }, [project]);

  // Remove um serviço
  const removeService = useCallback(async (serviceId, cost) => {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== serviceId,
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    const servicesPatched = await patchProjectServices(projectUpdated);

    if (servicesPatched) {
      setProject(projectUpdated);
      setServices(servicesUpdated);
      setMessage('Serviço removido com sucesso');
      setMessageType('success');
    }
  }, []);

  if (!project.name) return <Loading />;

  return (
    <div className={styles.project_details}>
      <Container customClass="column">
        {message && <Message type={messageType} message={message} />}

        <div className={styles.details_container}>
          <h1>{`Projeto: ${project.name}`}</h1>
          <button
            className={styles.button}
            onClick={toggleProjectForm}
            type="button"
          >
            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
          </button>

          {/* Exibe os dados do projeto ou habilita a edição dos mesmos */}
          {!showProjectForm ? (
            <div className={styles.project_info}>
              <p>
                <span>Categoria: </span>
                {project.category.name}
              </p>

              <p>
                <span>Total de orçamento: </span>
                {`R$ ${project.budget}`}
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

        {/* Exibe o formulário de serviço ou habilita a criação de um novo serviço */}
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

        {/* Exibe os serviços do projeto */}
        <h2>Serviços</h2>
        <Container customClass="start">
          {services.length > 0
            && services.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                cost={service.cost}
                description={service.description}
                id={service.id}
                handleRemove={removeService}
              />
            ))}

          {services.length === 0 && <p>Não há serviços cadastrados.</p>}
        </Container>
      </Container>
    </div>
  );
}
