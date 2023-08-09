import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  customStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ text, customStyle }) => {
  const buttonClasses = `${styles.buttonCard} ${styles.buttonCustom} ${customStyle}`;
  return <button className={buttonClasses && styles.buttonCard}>{text}</button>;
};

;
