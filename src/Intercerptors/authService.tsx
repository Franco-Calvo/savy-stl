import axios from "axios";

export const signOut = async () => {
  const token = localStorage.getItem("token");
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const response = await axios.post(
      "https://savypixel.onrender.com/auth/signout",
      null,
      headers
    );
    return response.data;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};
