import React from "react";
import styles from "./Tickets.module.css";
import {
  svgAccept,
  svgDecline,
  svgEnviar,
} from "@/Components/Presentation/Icons/icons";

export default function page() {
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
