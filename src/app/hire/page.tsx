"use client";
import React, { useState, useEffect } from "react";
import { createIcon, sendMessage } from "@/Components/Presentation/Icons/icons";
import styles from "./Hire.module.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import Modal from "@/Components/Containers/ModalTicket/ModalTicket";
import MessageByUser from "@/Components/Containers/Messages/MessageByUser";

interface Props {}

export default function Page({}: Props) {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [userID, setUserID] = useState<string | null>(
    localStorage.getItem("userId")
  );
  const [isOpen, setIsOpen] = useState(false);
  const [ticketExists, setTicketExists] = useState(false);
  const [ticketData, setTicketData] = useState<any>(null);
  const [ticketId, setTicketId] = useState<any>(null);
  const [messageData, setMessageData] = useState<any>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function formatTime(dateTimeString: string) {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  }

  async function checkTicketExists() {
    if (userID) {
      const urlTicket = `http://localhost:8000/tickets/${userID}`;
      try {
        const response = await axios.get(urlTicket);
        setTicketData(response.data);
        setTicketId(response.data._id);
        setTicketExists(response.data !== null);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    checkTicketExists();
  }, []);

  async function getMessages() {
    const urlChatMessages = `http://localhost:8000/tickets/messages/${ticketId}`;
    try {
      const response = await axios.get(urlChatMessages);
      setMessageData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMessages();
  }, [ticketId]);

  async function postMessage() {
    const urlSendMessage = `http://localhost:8000/tickets/message`;

    const messageData = {
      text: message,
      author: "user",
      ticketId: ticketId,
    };

    try {
      const response = await axios.post(urlSendMessage, messageData);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSendMessageClick() {
    if (message.trim() !== "") {
      await postMessage();
      setMessage("");
    }
  }

  console.log(messageData);

  return (
    <div className={styles.hire}>
      <Toaster position="top-right" />
      <div className={styles.budget}>
        {ticketExists && ticketData ? (
          <label className={styles.title}>
            {ticketData.title} #{ticketData._id.slice(-5)}
          </label>
        ) : (
          <button className={styles.createAction} onClick={toggleModal}>
            {createIcon()}
            <label>Crear ticket</label>
          </button>
        )}
      </div>
      <div className={styles.containerChat}>
        <div className={styles.scrollMessages}>
          {messageData && messageData.length > 0 ? (
            messageData.map((messageItem: any, index: number) => (
              <MessageByUser
                key={index}
                author={messageItem.author}
                text={messageItem.text}
                time={formatTime(messageItem.createdAt)}
              />
            ))
          ) : (
            <p>No hay mensajes disponibles</p>
          )}
        </div>
      </div>

      <div className={styles.sendMessage}>
        <input
          type="text"
          placeholder="Envía un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={styles.sendMessageBtn}
          onClick={handleSendMessageClick}
        >
          {sendMessage()}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
}
