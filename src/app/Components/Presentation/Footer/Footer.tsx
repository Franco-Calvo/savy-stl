import React from "react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import styles from "./Footer.module.css"; // Assuming you have a separate CSS module file named "Footer.module.css"

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <span>SavySTL 2023 &copy; | Todos los derechos reservados. </span>
      <span className={styles.iconsFooter}>
        <FaDiscord />
        <FaInstagram />
      </span>
    </div>
  );
};

export default Footer;
