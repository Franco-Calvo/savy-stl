"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "@/Components/Presentation/ErrorPage/ErrorPage";
import Loader from "@/Components/Presentation/Loader/Loader";

const AdminLayoutWrapper = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/auth/verifytoken",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.is_admin === true) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error(error);
        setIsAdmin(false);
      }
    };

    verifyToken();
  }, []);

  if (isAdmin === null) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else if (isAdmin) {
    return <div>{children}</div>;
  } else {
    return (
      <ErrorPage
        title="Página no encontrada"
        description="Parece que te has perdido, por qué no regresamos?"
        button="Volver"
      />
    );
  }
};

export default AdminLayoutWrapper;
