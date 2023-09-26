//@ts-nocheck
import { Button } from "@/Components/Containers/Button/Button";
import { svgIcon } from "@/Components/Presentation/Icons/icons";
import styles from "./CardSubscriptions.module.css";

interface CardSubscriptionsProps {
  title: string;
  price: string;
  onClick: () => void;
  month?: string;
}

export default function CardSubscriptions({
  title,
  price,
  onClick,
  month,
}: CardSubscriptionsProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{title}</h3>
        <div className={styles.cardPrice}>
          <span className={styles.price}>
            ${price}
            <span className={styles.month}>{month}</span>
          </span>
        </div>
      </div>

      <div className={styles.cardAdvantages}>
        <div className={styles.contenidAdvantages}>
          {svgIcon()}
          <span>Descargas ilimitadas</span>
        </div>

        <div className={styles.contenidAdvantages}>
          {svgIcon()}

          <span>Accesos a archivos premium</span>
        </div>

        <div className={styles.contenidAdvantages}>
          {svgIcon()}

          <span>Soporte prioritario</span>
        </div>
      </div>
      <Button
        text="Seleccionar Plan"
        customStyle={styles.customButton}
        onClick={onClick}
      />
    </div>
  );
}
