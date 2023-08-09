import axios from "axios";
import React from "react";
import { RiCheckFill } from "react-icons/ri";
import styles from "./Subscriptions.module.css";
import Button from "@/Components/Containers/Button/Button";

interface SubscriptionsProps {}

const Subscriptions: React.FC<SubscriptionsProps> = () => {
  const handlePayment = async (subscriptionType: string) => {
    const userEmail = JSON.parse(localStorage.getItem("user")!).email;

    try {
      const res = await axios.post("http://localhost:8000/create-order", {
        email: userEmail,
        subscriptionType: subscriptionType,
      });
      const urlToPay = res.data.init_point;
      window.open(urlToPay, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.containerCards}>
        <Button text="hola" customStyle={styles.buttonCustom} />
      </div>
    </div>
  );
};

export default Subscriptions;
