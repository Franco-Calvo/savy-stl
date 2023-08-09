//@ts-nocheck
import React from "react";
import styles from "./cardDashboard.module.css";
import Image from "next/image";

export default function cardDashboard({ title, number, image }) {
  return (
    <div className={styles.cardDash}>
      <div className={styles.contenid}>
        <h3>{title}</h3>
        <span>{number}</span>
      </div>
      <div className={styles.image}>{image}</div>
    </div>
  );
}
