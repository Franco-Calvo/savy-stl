"use client";
import React, { useState } from "react";
import styles from "./Tickets.module.css";
import {
  svgAccept,
  svgDecline,
  svgEnviar,
} from "@/Components/Presentation/Icons/icons";
import { formatTime } from "@/Intercerptors/FormattedTime";

export default function Page() {
  const [message, setMessage] = useState<string>("");
  const [ticketData, setTicketData] = useState<any>(null);
  const [ticketId, setTicketId] = useState<any>(null);
  const [messageData, setMessageData] = useState<any>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  return (
    <div className={styles.hire}>
      <div className={styles.budget}>
        <label className={styles.title}></label>

        <button className={styles.createAction}>
          <label className={styles.presupuesto}>
            Presupuesto: Estatua de la libertad
          </label>
          <div className={styles.btns}>
            <div className={styles.decline}>
              {svgDecline()}
              <label>Rechazar</label>
            </div>
            <div className={styles.accept}>
              {svgAccept()}
              <label>Aceptar</label>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.containerChat}>
        <div className={styles.scrollMessages}>
          <p>No hay mensajes disponibles</p>
        </div>
      </div>

      <div className={styles.sendMessage}>
        <input type="text" placeholder="Envía un mensaje..." />
        <button className={styles.sendMessageBtn}>{svgEnviar()}</button>
      </div>
    </div>
  );
}
