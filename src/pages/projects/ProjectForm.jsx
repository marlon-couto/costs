import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProjectForm.module.css';

import Input from './form/Input';
import Select from './form/Select';
import SubmitButton from './form/SubmitButton';

export default function ProjectForm({ onSubmit, projectData, buttonText }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  /* TODO: Criar um helper para a função de fetch */

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(project);
  };

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setProject({ ...project, [name]: value });
    },
    [project]
  );

  const handleSelect = useCallback(
    ({ target }) => {
      const { value, options, selectedIndex } = target;
      setProject({
        ...project,
        category: { id: value, name: options[selectedIndex].text },
      });
    },
    [project]
  );

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        onChange={handleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        name="budget"
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        onChange={handleChange}
        value={project.budget ? project.budget : ''}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        categories={categories}
        onChange={handleSelect}
        value={project.category ? project.category.id : ''}
      />

      <SubmitButton text={buttonText} />
    </form>
  );
}
