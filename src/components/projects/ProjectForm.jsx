import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import { getCategories } from '../../helpers/fetchAPI';
import styles from './ProjectForm.module.css';

/* Renderiza um formulário para edição de um projeto */
export default function ProjectForm({ handleSubmit, projectData, buttonText }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  // TODO: incluir validação de formulário.

  // Salva no estado local as categorias de projeto
  const handleCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    handleCategories();
  }, []);

  // Função que envia os dados do formulário para o componente pai
  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
  };

  // Função que atualiza o estado local com os dados do formulário
  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setProject({ ...project, [name]: value });
    },
    [project],
  );

  // Função que atualiza o estado local com os dados do formulário
  const handleSelect = useCallback(
    ({ target: { value, options, selectedIndex } }) => {
      setProject({
        ...project,
        category: { id: value, name: options[selectedIndex].text },
      });
    },
    [project],
  );

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        name="name"
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        handleChange={handleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        name="budget"
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        handleChange={handleChange}
        value={project.budget ? project.budget : ''}
      />

      <Select
        name="category-id"
        text="Selecione a categoria"
        categories={categories}
        handleChange={handleSelect}
        value={project.category ? project.category.id : ''}
      />

      <SubmitButton text={buttonText} />
    </form>
  );
}

ProjectForm.propTypes = {
  buttonText: PropTypes.string,
  handleSubmit: PropTypes.func,
}.isRequired;

ProjectForm.propTypes = {
  projectData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    budget: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
    cost: PropTypes.number,
    services: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

ProjectForm.defaultProps = {
  projectData: {},
};
