import React from "react";
import styles from "./adminDashboard.module.css";
import CardDashboard from "../../Components/Containers/CardDashboard/cardDashboard";
import {
  svgBilletera,
  svgGlobal,
  svgAdd,
  svgWallet,
} from "@/Components/Presentation/Icons/icons";

export default function AdminPanel() {
  return (
    <div className={styles.adminPanel}>
      <div className={styles.cardContainer}>
        <CardDashboard
          title="Ingresos del día"
          number="$25.000"
          image={svgBilletera()}
        />
        <CardDashboard
          title="Ingresos del día"
          number="1,432"
          image={svgGlobal()}
        />

        <CardDashboard
          title="Ingresos del día"
          number="$22,349"
          image={svgAdd()}
        />
        <CardDashboard
          title="Ingresos del día"
          number="$223,349"
          image={svgWallet()}
        />
      </div>

      {/* <div className={styles.pagesVisited}>

      </div> */}

      <div></div>
    </div>
  );
}
