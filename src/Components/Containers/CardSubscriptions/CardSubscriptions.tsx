//@ts-nocheck
import React from "react";
import { svgIcon } from "@/Components/Presentation/Icons/icons";
import Image from "next/image";
import styles from "./CardSubscriptions.module.css";
import { Button } from "@/Components/Containers/Button/Button";

export default function CardSubscriptions({ title, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{title}</h3>
        <div className={styles.cardPrice}>
          <span className={styles.price}>${price}</span>
        </div>
      </div>

      <div className={styles.cardAdvantages}>
        <div className={styles.contenidAdvantages}>
          {svgIcon()}
          <span>Descargas ilimitadas</span>
        </div>

        <div className={styles.contenidAdvantages}>
          {svgIcon()}

          <span>Accesos a archivos premium</span>
        </div>

        <div className={styles.contenidAdvantages}>
          {svgIcon()}

          <span>Soporte prioritario</span>
        </div>
      </div>
      <Button text="Seleccionar Plan" customStyle={styles.customButton} />
    </div>
  );
}
