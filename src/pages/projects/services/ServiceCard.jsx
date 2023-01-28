import PropTypes from 'prop-types';
import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import styles from '../../../styles/ProjectCard.module.css';

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove,
}) {
  const remove = (event) => {
    event.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total: </span>
        {`R$ ${cost}`}
      </p>
      <p>{description}</p>

      <div className={styles.project_card_actions}>
        <button type="button" onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  cost: PropTypes.number,
  description: PropTypes.string,
  handleRemove: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
