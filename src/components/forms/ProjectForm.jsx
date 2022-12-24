import React from 'react';
import styles from './ProjectForm.module.css';
import Input from './Input';
import Select from './Select';
import SubmitButton from './SubmitButton';

export default function ProjectForm({ btnText }) {
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
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
