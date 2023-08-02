import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import Image from "next/image";
// import imgHome from "../../images/Astronaut 1_02 1.svg";
// import imgWorld from "../../images/Earth_02 1.svg";

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
        <div className={styles.containerImg}>
          {/* <Image className={styles.imgWorld} src={imgWorld} alt="asd" /> */}
          {/* <Image src={imgHome} alt="asd" /> */}
        </div>
      </div>
    </div>
  );
}
