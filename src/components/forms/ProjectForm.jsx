import React, { useEffect, useState } from 'react';
import styles from './ProjectForm.module.css';

import Input from './Input';
import Select from './Select';
import SubmitButton from './SubmitButton';

export default function ProjectForm({ buttonText }) {
  const [categories, setCategories] = useState([]);

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

  return (
    <form className={styles.form}>
      <Input
        name="project_name"
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
      />

      <Input
        name="project_budget"
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        categories={categories}
      />

      <SubmitButton text={buttonText} />
    </form>
  );
}
