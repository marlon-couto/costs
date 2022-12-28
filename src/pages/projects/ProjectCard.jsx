import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import styles from '../../assets/styles/ProjectCard.module.css';

export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove,
}) {
  const remove = (event) => {
    event.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>

      <p>
        <span>Orçamento:</span>
        {' '}
        {`R$ ${budget}`}
      </p>

      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`} />
        {category}
      </p>

      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil />
          Editar
        </Link>

        <button type="button" onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  budget: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
