import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';
import styles from '../projects/ProjectForm.module.css';

// Esse componente renderiza um formulário para adicionar um serviço ao projeto
export default function ServiceForm({ handleSubmit, buttonText, projectData }) {
  const [service, setService] = useState({});

  // Envia os dados do serviço para o componente pai
  const submit = (event) => {
    event.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  };

  // Atualiza o estado do serviço
  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setService({ ...service, [name]: value });
    },
    [service],
  );

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleChange={handleChange}
      />

      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total do serviço"
        handleChange={handleChange}
      />

      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleChange={handleChange}
      />

      <SubmitButton text={buttonText} />
    </form>
  );
}

ServiceForm.propTypes = {
  buttonText: PropTypes.string,
  handleSubmit: PropTypes.func,
  projectData: PropTypes.shape({
    services: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        cost: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
  }),
}.isRequired;
