import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { getCategories } from '../../helpers/fetchAPI';
import styles from '../../assets/styles/ProjectForm.module.css';

import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import SubmitButton from '../../components/form/SubmitButton';

export default function ProjectForm({ handleSubmit, projectData, buttonText }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  // TODO: incluir validação de formulário.

  const handleCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    handleCategories();
  }, []);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
  };

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setProject({ ...project, [name]: value });
    },
    [project],
  );

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
        name="category_id"
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
