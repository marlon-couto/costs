import React from 'react';
import { useLocation } from 'react-router-dom';

import Message from '../../layout/message/Message';

export default function Projects() {
  const location = useLocation();
  const { state } = location;

  let message = '';

  if (state) {
    message = state.message;
  }

  return (
    <div>
      <h1>Meus Projetos</h1>

      {message && (
        <Message
          message={message}
          type="success"
        />
      )}
    </div>
  );
}
