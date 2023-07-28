import React from "react";
import "./ActionHome.css";
import { Link as Anchor } from "react-router-dom";
import image from "../Images/monster.png";
import Image from "next/image";

export default function ActionHome() {
  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <h1 className="principalTitle">Busca, descarga e imprime</h1>
        <span className="slogan">Hacemos tu impresión más fácil</span>
        <span>
          <p className="paragraph">
            Contamos con una amplia variedad de archivos para tus impresiones.
          </p>
          <p className="paragraph">Descarga archivos GRATIS cada semana.</p>
        </span>
        <span className="containerButtons">
          <Anchor to="/explore" className="gradientButton">
            Explorar
          </Anchor>
          <button className="alternativeButton">Contratar</button>
        </span>
      </div>
      <Image className="monster" src={image} alt="" />
    </div>
  );
}
