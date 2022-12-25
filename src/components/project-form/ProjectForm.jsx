import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProjectForm.module.css';

import Input from '../forms/input/Input';
import Select from '../forms/select/Select';
import SubmitButton from '../forms/submit-button/SubmitButton';

export default function ProjectForm({ onSubmit, projectData, buttonText }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  const { name, budget, category } = project;

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
        value={name ? name : ''}
      />

      <Input
        name="budget"
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        onChange={handleChange}
        value={budget ? budget : ''}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        categories={categories}
        onChange={handleSelect}
        value={category ? category.id : ''}
      />

      <SubmitButton text={buttonText} />
    </form>
  );
}
