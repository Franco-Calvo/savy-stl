import React from "react";
import styles from "./Card.module.css";
import {Button} from "../Button/Button";
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
          width={200}
          height={200}
        />
      </div>

      <div className={styles.cardBody}>        
          <h2>{title}</h2>
          <p>{description}</p>
      </div>
        
      <span className={styles.containerDownload}>
          <Button text={text} customStyle={styles.buttonCard} onClick={onClick} />
      </span>
    </div>


        
  );
};

export default Card;
