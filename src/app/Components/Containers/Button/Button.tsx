import React from "react";
import "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button-card" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
