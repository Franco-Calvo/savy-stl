//@ts-nocheck
"use client";
import React, { useState, useEffect, useRef } from "react";
import { svgEnviar } from "@/Components/Presentation/Icons/icons";
import styles from "./Hire.module.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import Modal from "@/Components/Containers/ModalTicket/ModalTicket";
import MessageByUser from "@/Components/Containers/Messages/MessageByUser";
import { formatTime } from "@/Intercerptors/FormattedTime";
import socketIOClient from "socket.io-client";

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
  const [forceUpdate, setForceUpdate] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const ENDPOINT = "http://localhost:8080";

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

  const socketRef = useRef<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT);
    socketRef.current.emit("set-client", userID);
    socketRef.current.on("new_message", (message: any) => {
      console.log("Mensaje recibido:", message);
      setMessageData((prevMessages: any) => {
        console.log("Mensajes previos:", prevMessages);
        return [...prevMessages, message];
      });
    });

    checkTicketExists();


    return () => {
      socketRef.current.disconnect();
    };
  }, []);

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

    const messageDataToSend = {
      text: message,
      author: "user",
      ticketId: ticketId,
    };

    try {
      const response = await axios.post(urlSendMessage, messageDataToSend);

      setMessageData((prevMessages) => [...prevMessages, messageDataToSend]);
      setMessage("");
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
            {/* {createIcon()} */}
            <label>Crear ticket</label>
          </button>
        )}
      </div>
      <div className={styles.containerChat}>
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
          <p className={styles.noMessages}>No hay mensajes disponibles</p>
        )}
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
          {svgEnviar()}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
}
