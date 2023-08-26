import React, { FC } from "react";
import styles from "./Tickets.module.css";

interface TicketsProps {
  title: string;
  status: string;
  date: string;
  onClick: () => void;
}

const Tickets: FC<TicketsProps> = ({ title, status, date, onClick }) => {
  return (
    <div className={styles.ticketContainer} onClick={onClick}>
      <label className={styles.title}>{title}</label>
      <span className={styles.status}>
        <label>Estado: {status}</label>
        <label>Creado: {date}</label>
      </span>
    </div>
  );
};

export default Tickets;
