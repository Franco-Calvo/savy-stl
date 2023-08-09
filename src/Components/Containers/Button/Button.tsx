import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: ()=> void;
  customStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ text, customStyle, onClick }) => {
  const buttonClasses = `${styles.buttonCard} ${styles.customButton} ${customStyle}`;

  return <button onClick={onClick} className={buttonClasses}>{text}</button>;
};

export default Button;
