import React from "react";
import styles from "./OurHome.module.css";
import { svgCohete } from "../Icons/icons";

const OurHome: React.FC = () => {
  return (
    <div className={styles.ourHome} id="ourHome">
      <div className={styles.ourHomeContainer}>
        <div className={styles.title}>
          <h2>Innovando en el mundo 3D</h2>
        </div>
        <div className={styles.infoOur}>
          <div className={styles.contenidOur}>
            <h3 className={styles.titleOur}>
              Explora, crea y materializa tus ideas
            </h3>
            <p>
              En <b>SavySTL</b>, estamos dedicados a ofrecerte una experiencia
              excepcional en el mundo de la impresión 3D. Nuestra plataforma te
              brinda acceso a una amplia selección de archivos STL de alta
              calidad para que puedas descargar y materializar tus proyectos.
              Además, si necesitas asistencia en diseño, contamos con talentosos
              diseñadores 3D disponibles para trabajar contigo y convertir tus
              ideas en realidad. Únete a nuestra comunidad y descubre un mundo
              de posibilidades en la impresión 3D.
            </p>
          </div>

          <div className={styles.imgOur}>{svgCohete()}</div>
        </div>
      </div>
    </div>
  );
};

export default OurHome;
