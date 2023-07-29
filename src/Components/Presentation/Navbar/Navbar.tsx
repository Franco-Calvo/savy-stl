import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className="STL">
        STL
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.anchor} href="/">
          INICIO
        </Link>
        <Link className={styles.anchor} href="/">
          NOSOTROS
        </Link>
        <Link className={styles.anchor} href="/">
          DISEÑOS PERSONALIZADOS
        </Link>
        <Link className={styles.anchor} href="/login">
          INGRESAR
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
