// MessageByUser.tsx

import React from "react";
import styles from "./Messages.module.css"; // Asegúrate de importar tus estilos CSS

interface MessageProps {
  author: string;
  text: string;
  time: any;
}

const MessageByUser: React.FC<MessageProps> = ({ author, text, time }) => {
  return (
    <div
      className={`${styles.message} ${
        author === "user" ? styles.userMessage : styles.otherMessage
      }`}
    >
      <div className={styles.messageText}>{text}</div>
      <div className={styles.messageTime}>{time}</div>
    </div>
  );
};

export default MessageByUser;
