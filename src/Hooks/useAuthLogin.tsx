import { useEffect, useState } from "react";

const useAuth = (): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("token");

      const url = "http://localhost:8000/verifyToken";

      if (token) {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            console.log("No tienes el token correcto");
            alert("No tienes el token correcto");
          }
        } catch (error) {
          console.error("Error al verificar el token:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkTokenValidity();
  }, []);

  return isAuthenticated;
};

export default useAuth;
