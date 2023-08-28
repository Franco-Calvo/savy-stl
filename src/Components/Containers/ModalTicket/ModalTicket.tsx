"use client";
import React, { useEffect, useState } from "react";
import styles from "./ModalTicket.module.css";
import { Toaster, toast } from "sonner";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [userID, setUserID] = useState<string | null>(null);

  const isClient = typeof window !== "undefined";

  useEffect(() => {
    if (isClient) {
      setUserID(localStorage.getItem("userId"));
    }
  }, []);

  const url = "https://savypixel.onrender.com/tickets";

  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function createTicket() {
    try {
      const dataTicket = {
        title: title,
        userId: userID,
        message: message,
        status: "open",
        unreadMsg: { admin: true, user: false },
      };
      const response = await axios.post(url, dataTicket);
      toast.success("Ticket creado: " + response.data.message);
      onClose();
    } catch (error) {
      toast.error("Ocurrió un error al crear el ticket");
    }
  }

  // Si el modal no está abierto, se regresa null después de que todos los Hooks se hayan ejecutado.
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <Toaster position="top-right" />

      <div className={styles.modalContent}>
        <h3>Presupuesto STL</h3>

        <input
          type="text"
          name="title"
          className={styles.topic}
          placeholder="Ingrese el título de su presupuesto"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.description}
          name="Description"
          placeholder="Describa lo que usted requiere"
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className={styles.buttonContainer}>
          <button className={styles.closeModal} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.confirm} onClick={createTicket}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
