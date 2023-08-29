"use client";
import CardSubscriptions from "@/Components/Containers/CardSubscriptions/CardSubscriptions";
import {
  svgCryptoFast,
  svgMp,
  svgPaypal,
} from "@/Components/Presentation/Icons/icons";
import axios from "axios";
import React from "react";
import styles from "./Subscriptions.module.css";

interface SubscriptionsProps {}

const Subscriptions: React.FC<SubscriptionsProps> = () => {
  const handlePayment = async (subscriptionType: string) => {
    const userEmail = JSON.parse(localStorage.getItem("user")!).email;

    try {
      const res = await axios.post(
        "https://savypixel.onrender.com/create-order",
        {
          email: userEmail,
          subscriptionType: subscriptionType,
        }
      );
      const urlToPay = res.data.init_point;
      window.open(urlToPay, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Nuestros planes</h2>
        <span className={styles.spanTitle}>
          Nuestros planes de precios están diseñados para ser asequibles,
          flexibles y adaptados a sus necesidades específicas.
        </span>
        <div className={styles.payContainer}>
          <div className={styles.pays}>{svgCryptoFast()}</div>
          <div className={styles.pays}>{svgMp()}</div>
          <div className={styles.pays}>{svgPaypal()}</div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <CardSubscriptions
          title="MENSUAL"
          price="3.499"
          onClick={() => handlePayment("month")}
        />
        <CardSubscriptions
          title="SEMESTRAL"
          price="2.899"
          onClick={() => handlePayment("semiannual")}
        />
        <CardSubscriptions
          title="ANUAL"
          price="2.399"
          onClick={() => handlePayment("year")}
        />
      </div>
    </div>
  );
};

export default Subscriptions;
