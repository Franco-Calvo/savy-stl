import React from "react";
import styles from "./Card.module.css";
import { Button } from "../Button/Button";
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
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <Image
          src={image}
          alt="Producto"
          className={styles.cardPicture}
          width={100}
          height={100}
        />
      </div>

      <div className={styles.cardBody}>
        <h2>{title}</h2>
        <p>{description}</p>

        <span className={styles.containerDownload}>
          <Button
            text={text}
            customStyle={styles.buttonCard}
            onClick={onClick}
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
