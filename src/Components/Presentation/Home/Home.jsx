import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";

export default function IndexHome() {
  return (
    <div className={styles.home}>
      <div className={styles.containerPrincipal}>
        <div className={styles.containerSecundario}>
          <h1 className={styles.principalTitle}>Busca, descarga e imprime</h1>
          <span className={styles.slogan}>Hacemos tu impresión más fácil</span>
          <span>
            <p className={styles.paragraph}>
              Contamos con una amplia variedad de archivos para tus impresiones.
            </p>
            <p className={styles.paragraph}>
              Descarga archivos GRATIS cada semana.
            </p>
          </span>
          <span className={styles.containerButtons}>
            <Link href="/explore" className={styles.gradientButton}>
              Explorar
            </Link>
            <button className={styles.alternativeButton}>Contratar</button>
          </span>
        </div>
        {/* <Image className="monster" src={image} alt="" /> */}
      </div>
    </div>
  );
}
