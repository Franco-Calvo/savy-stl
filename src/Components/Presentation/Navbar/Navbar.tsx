import Link from "next/link";
import React, { useState, useEffect } from "react";
import { svgLogoIcon } from "../Icons/icons";
import styles from "./Navbar.module.css";
import { signOut } from "@/Intercerptors/authService";

const Navbar: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      const user = JSON.parse(userStorage);
      if (user.is_online) {
        setIsLogged(true);
      }
    }
  }, []);

  const handleScrollTo = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.stl}>
        {/* {svgLogoIcon()} */}
      </Link>
      <nav className={styles.nav}>
        <a className={styles.anchor} onClick={() => handleScrollTo("home")}>
          INICIO
        </a>
        <a className={styles.anchor} onClick={() => handleScrollTo("ourHome")}>
          NOSOTROS
        </a>
        <a
          className={styles.anchor}
          onClick={() => handleScrollTo("customDesigns")}
        >
          DISEÑOS PERSONALIZADOS
        </a>
        {!isLogged && (
          <Link className={styles.anchor} href="/login">
            INGRESAR
          </Link>
        )}
        {isLogged && (
          <Link className={styles.anchor} onClick={handleSignOut} href="/">
            CERRAR SESIÓN
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
