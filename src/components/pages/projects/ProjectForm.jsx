import React from 'react';

export default function ProjectForm() {
  return (
    <form>
      <div>
        <label htmlFor="project_name">
          <input
            type="text"
            placeholder="Insira o nome do projeto"
            name="project_name"
            id="project_name"
          />
        </label>
      </div>

      <div>
        <label htmlFor="project_budget">
          <input
            type="number"
            placeholder="Insira o orçamento total"
            name="project_budget"
            id="project_budget"
          />
        </label>
      </div>

      <div>
        <select
          name="category_id"
          id="category_id"
        >
          <option
            value=""
            disabled
            selected
          >
            Selecione a categoria
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="project_submit">
          <input
            type="submit"
            value="Criar projeto"
            id="project_submit"
            name="project_submit"
          />
        </label>
      </div>
    </form>
  );
}
