import React from "react";
import "./Card.module.css";
import Button from "../Button/Button";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  text: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  text,
  onClick,
}) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <Image src={image} alt="Producto" className="card-picture" />
      </div>

      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="containerDownload">
          <Button text={text} onClick={onClick} />
        </span>
      </div>
    </div>
  );
};

export default Card;
