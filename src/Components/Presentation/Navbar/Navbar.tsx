import Link from "next/link";
import React, { useState, useEffect } from "react";
import { svgLogoIcon } from "../Icons/icons";
import styles from "./Navbar.module.css";
import { signOut } from "@/Intercerptors/authService";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Navbar: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleSignOut = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signout",
        { is_online: false },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200 || response.status === 201) {
        await signOut();
        localStorage.clear();
        window.location.href = "/";
        toast.success("Deslogueado con éxito");
      } else {
        console.error("Error al desloguearse", response.data);
      }
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
      <Toaster position="top-right" />
      {/* <Link href="/" className={styles.stl}> */}
      {/* {svgLogoIcon()} */}
      {/* </Link> */}
      <input className={styles.checkbox} type="checkbox" name="" id="" />
      <div className={styles.hamburgerLines}>
        <span className={`${styles.line} ${styles.lineOne}`}></span>
        <span className={`${styles.line} ${styles.lineTwo}`}></span>
        <span className={`${styles.line} ${styles.lineThree}`}></span>
      </div>

      <div className={styles.navBackdrop}></div>
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
