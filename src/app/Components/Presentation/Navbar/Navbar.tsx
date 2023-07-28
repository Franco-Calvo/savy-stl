import React from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link href="/" className="STL">
        STL
      </Link>
      <nav>
        <Link href="/">INICIO</Link>
        <Link href="/">NOSOTROS</Link>
        <Link href="/">DISEÑOS PERSONALIZADOS</Link>
        <Link href="/login">INGRESAR</Link>
        {/* <Link href="/uploadfile">Subir Archivo</Link> */}
      </nav>
      {/* <ProfileNav /> */}
    </div>
  );
};

export default Navbar;
