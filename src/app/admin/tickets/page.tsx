//@ts-nocheck
"use client";
import MessageByAdmin from "@/Components/Containers/Messages/MessageByAdmin";
import Tickets from "@/Components/Containers/Tickets/Tickets";
import {
  svgAccept,
  svgArrowLeft,
  svgArrowRight,
  svgDecline,
  svgEnviar,
} from "@/Components/Presentation/Icons/icons";
import { formatTime } from "@/Intercerptors/FormattedTime";
import axios from "axios";
import { useEffect, useRef, useState, useCallback } from "react";
import socketIOClient from "socket.io-client";
import { Toaster } from "sonner";
import styles from "./Tickets.module.css";

const ENDPOINT = "http://localhost:8080";

interface Ticket {
  unreadMsg: {
    admin: boolean;
    user: boolean;
  };
  _id: string;
  title: string;
  status: string;
  message: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface TicketResponse {
  items: Ticket[];
  size: number;
}

interface PaginationPayload {
  page: number;
}

interface Message {
  author: string;
  text: string;
  createdAt: string;
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [ticketData, setTicketData] = useState<Ticket[]>([]);
  const [ticketId, setTicketId] = useState<any>(null);
  const [currentTicketTitle, setCurrentTicketTitle] = useState<string>("");
  const [messageData, setMessageData] = useState<any>(null);
  const messagesEndRef = useRef(null);

  const socketRef = useRef<SocketIOClient.Socket | null>(null);

  const fetchFilteredTickets = useCallback(
    async (pageNumber: number) => {
      const payload: PaginationPayload = {
        page: pageNumber - 1,
      };
      try {
        const response = await axios.post<TicketResponse>(
          "https://savypixel.onrender.com/tickets/filtered",
          payload
        );
        setTicketData(response.data.items);
        console.log(ticketData);
      } catch (err) {
        console.error("Error fetching filtered tickets", err);
      }
    },
    [ticketData]
  );

  const getMessages = useCallback(async () => {
    const urlChatMessages = `https://savypixel.onrender.com/tickets/messages/${ticketId}`;
    try {
      const response = await axios.get(urlChatMessages);
      setMessageData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [ticketId]);

  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT);

    socketRef.current.on("newMessage", (message: any) => {
      setMessageData((prevMessages: any) => [...prevMessages, message]);
    });

    fetchFilteredTickets(1);

    return () => {
      socketRef.current.disconnect();
    };
  }, [fetchFilteredTickets]);

  useEffect(() => {
    if (ticketId) {
      getMessages();
    }
  }, [ticketId, getMessages]);

  const handleTicketClick = (id: string, title: string) => {
    setTicketId(id);
    setCurrentTicketTitle(title);
  };

  const handleNextButton = async () => {
    const newPage = currentPage + 1;
    try {
      await fetchFilteredTickets(newPage);
      setCurrentPage(newPage);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrevButton = async () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      try {
        await fetchFilteredTickets(newPage);
        setCurrentPage(newPage);
      } catch (err) {
        console.error(err);
      }
    }
  };

  function scrollToBottom() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  async function postMessage() {
    const urlSendMessage = `https://savypixel.onrender.com/tickets/message`;

    const messageDataToSend = {
      text: message,
      author: "admin",
      ticketId: ticketId,
    };

    try {
      await axios.post(urlSendMessage, messageDataToSend);
      setMessageData((prevMessages: any) => [
        ...prevMessages,
        messageDataToSend,
      ]);
      setMessage("");
      scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  }

  function handleEnterPress(e: React.KeyboardEvent) {
    if (e.key === "Enter" && message.trim() !== "") {
      postMessage();
      e.preventDefault();
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [messageData]);

  return (
    <div className={styles.hire}>
      <Toaster position="top-right" />
      <div className={styles.chatContainer}>
        <div className={styles.budget}>
          <label className={styles.title}></label>
          <button className={styles.createAction}>
            <label className={styles.presupuesto}>
              {currentTicketTitle || "Debes seleccionar un ticket"}
            </label>
            <div className={styles.btns}>
              <div className={styles.decline}>
                {svgDecline()}
                <label>Rechazar</label>
              </div>
              <div className={styles.accept}>
                {svgAccept()}
                <label>Aceptar</label>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.containerChat}>
          <div className={styles.chatMessages}>
            {messageData && messageData.length > 0 ? (
              messageData.map((messageData: Message, index: number) => (
                <span className={styles.marginMessage} key={index}>
                  <MessageByAdmin
                    author={messageData.author}
                    text={messageData.text}
                    time={formatTime(messageData.createdAt)}
                  />
                </span>
              ))
            ) : (
              <p className={styles.noMessages}>No hay mensajes disponibles</p>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className={styles.sendMessage}>
          <input
            type="text"
            placeholder="Envía un mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <button className={styles.sendMessageBtn} onClick={postMessage}>
            {svgEnviar()}
          </button>
        </div>
      </div>

      <aside className={styles.ticketsContainer}>
        <h3>Tickets disponibles</h3>
        {ticketData.map((ticket) => (
          <Tickets
            key={ticket._id}
            title={ticket.title}
            status={ticket.status}
            date={new Date(ticket.createdAt).toLocaleDateString()}
            onClick={() => handleTicketClick(ticket._id, ticket.title)}
          />
        ))}
        <div className={styles.containerPagination}>
          <div className={styles.buttonPagination} onClick={handlePrevButton}>
            {svgArrowLeft()}
          </div>
          <span className={styles.numPagination}>{currentPage}</span>
          <div className={styles.buttonPagination} onClick={handleNextButton}>
            {svgArrowRight()}
          </div>
        </div>
      </aside>
    </div>
  );
}
