import React, { useEffect, useState } from 'react';
import styles from './Message.module.css';

export default function Message({ message, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, visible]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{message}</div>
      )}
    </>
  );
}
