import React from "react";
import styles from "./CustomDesigns.module.css";
import Steps from "../../Containers/Steps/Steps";
import Footer from "../ErrorPage/Footer/Footer";

export default function CustomDesigns() {
  return (
    <div className={styles.customDesigns} id="customDesigns">
      <h3>
        Diseños únicos <span className={styles.customTitle}>a medida</span>
      </h3>

      <div className={styles.stepsInfo}>
        <div className={styles.containerStep}>
          <Steps />
        </div>
        <span>Paso 1</span>
        <h4>Registrarse</h4>
        <p>
          Regístrate de manera sencilla y gratuita para formar parte de nuestra
          comunidad de entusiastas de la impresión 3D.
        </p>
      </div>

      <div className={styles.stepsInfo}>
        <div className={styles.containerStep}>
          <Steps />
        </div>
        <span>Paso 2</span>
        <h4>Acceder a diseños personalizados y enviar tus ideas</h4>
        <p>
          Explora nuestra plataforma y descubre una amplia variedad de diseños
          personalizados disponibles. Si no encuentras lo que buscas,
          compártenos tus ideas y requisitos. Nuestro equipo de talentosos
          diseñadores 3D colaborará contigo para dar vida a tus proyectos.
        </p>
      </div>

      <div className={styles.stepsInfo}>
        <div className={styles.containerStep}>
          <Steps />
        </div>
        <span>Paso 3</span>
        <h4>Esperar el presupuesto del diseñador</h4>
        <p>
          Después de enviar tus solicitudes, nuestro diseñador revisará
          cuidadosamente tus especificaciones y te proporcionará un presupuesto
          detallado.
        </p>
      </div>
      <span className={styles.footerContainer}>
        <Footer />
      </span>
    </div>
  );
}
