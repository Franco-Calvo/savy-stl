// MessageByUser.tsx

import React from "react";
import styles from "./Messages.module.css";

interface MessageProps {
  author: string;
  text: string;
  time: any;
}

const MessageByAdmin: React.FC<MessageProps> = ({ author, text, time }) => {
  return (
    <div
      className={`${styles.message} ${
        author === "admin" ? styles.userMessage : styles.otherMessage
      }`}
    >
      <div className={styles.messageText}>{text}</div>
      <div className={styles.messageTime}>{time}</div>
    </div>
  );
};

export default MessageByAdmin;
