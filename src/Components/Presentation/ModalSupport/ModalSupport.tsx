import React from "react";
import styles from "./ModalSupport.module.css";
import { Button } from "@/Components/Containers/Button/Button";

export const ModalSupport = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Centro de resolución de problemas</h2>
        <input
          type="text"
          placeholder="Indique un título para su inconveniente"
        />
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Correo electrónico" />
        <textarea
          className={styles.textArea}
          name="descriptionError"
          id=""
          cols={30}
          rows={10}
        ></textarea>

        <span className={styles.containerButtons}>
          <Button text="Cancelar" onClick={() => null} />
          <Button text="Enviar" onClick={() => null} />
        </span>
      </div>
    </div>
  );
};
