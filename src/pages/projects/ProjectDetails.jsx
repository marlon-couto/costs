import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../assets/styles/ProjectDetails.module.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => error.message);
  }, [id]);

  return (
    <div>
      <p>{project.name}</p>
    </div>
  );
}
