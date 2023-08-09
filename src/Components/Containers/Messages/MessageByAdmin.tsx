// En el archivo donde se encuentra el componente MessageByAdmin
import React from "react";
import styles from "./Messages.module.css";

interface Message {
  _id: string;
  ticketId: string;
  author: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface MessageByAdminProps {
  message: Message;
}

const MessageByAdmin: React.FC<MessageByAdminProps> = ({ message }) => {
  return <label className={styles.messageByAdmin}>{message.text}</label>;
};

export default MessageByAdmin;
