import React from "react";
import Image from "next/image";
import styles from "./OurHome.module.css";

const OurHome: React.FC = () => {
  return (
    <div className={styles.OurHome}>
      <div className={styles.OurHomeContainer}>
        <div>    
          <h2>Innovando en el mundo 3D</h2>
        </div>
        <div className={styles.InfoOur}>
          <div className={styles.ContenidOur}>
            <h3>Explora, crea y materializa tus ideas</h3>
            <p>
            En SavySTL, estamos dedicados a ofrecerte una experiencia
            excepcional en el mundo de la impresión 3D. Nuestra plataforma te
            brinda acceso a una amplia selección de archivos STL de alta calidad
            para que puedas descargar y materializar tus proyectos. Además, si
            necesitas asistencia en diseño, contamos con talentosos diseñadores
            3D disponibles para trabajar contigo y convertir tus ideas en
            realidad. Únete a nuestra comunidad y descubre un mundo de
            posibilidades en la impresión 3D.
            </p>
          </div>

          
          
          
        </div>

        
      </div>     
    </div>
  
  );
};

export default OurHome;
