"use client";
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import styles from "./Login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const formRef = useRef();
  const router = useRouter();

  async function handleSignIn(e) {
    e.preventDefault();

    const formInputs = [];

    Object.values(formRef.current).forEach((e) => {
      formInputs.push(e.value);
    });

    const data = {
      email: formInputs[0].toLowerCase(),
      password: formInputs[1],
    };

    const url = "http://localhost:8000/auth/signin";

    try {
      const res = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.data.user.name,
          last_name: res.data.user.last_name,
          email: res.data.user.email,
        })
      );
      toast.success(res.data.message);
      setTimeout(() => {
        router.push("/uploadfile");
      }, 3000);
    } catch (error) {
      toast.error(error?.res?.data?.message);
      console.log(error);
    }
  }

  return (
    <div className={styles.formLogin}>
      <Toaster position="top-right" />
      <h3>Nos alegra verte por aquí</h3>
      <div className={styles.circleGradient && styles.bouncingCircle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="181"
          viewBox="0 0 256 181"
          fill="none"
        >
          <circle
            cx="127.678"
            cy="52.6784"
            r="127.36"
            transform="rotate(-0.143373 127.678 52.6784)"
            fill="url(#paint0_radial_2_64)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_64"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(190.282 -32.3436) rotate(103.529) scale(218.434)"
            >
              <stop offset="0.181218" stopColor="#2EB7B7" />
              <stop offset="0.667423" stopColor="#0C79DD" />
              <stop offset="0.992812" stopColor="#042646" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.circleGradientCopy && styles.bouncingCircle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
        >
          <circle
            cx="68.8654"
            cy="68.8654"
            r="68.6937"
            transform="rotate(-0.143373 68.8654 68.8654)"
            fill="url(#paint0_radial_2_61)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_61"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(38.3349 33.2464) rotate(59.144) scale(115.955)"
            >
              <stop stopColor="#646464" />
              <stop offset="0.604593" stopColor="#292929" />
              <stop offset="0.796202" stopColor="#0F0F0F" />
              <stop offset="1" stopColor="#1B1B1B" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <form ref={formRef} onSubmit={handleSignIn}>
        <span className={styles.inputContainer}>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Correo electrónico"
          />
        </span>
        <span className={styles.inputContainer}>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Contraseña"
          />
        </span>
        <input
          onClick={handleSignIn}
          className={styles.buttonSubmit}
          type="submit"
          value="Iniciar sesión"
        />
      </form>
      <span className={styles.labelBottom}>
        <span className={styles.notAccount}>
          ¿No tienes cuenta?{" "}
          <Link className={styles.actionSignUp} href="/register">
            Regístrate
          </Link>
        </span>
        <span className={styles.passwordRecover}>Olvidé mi contraseña</span>
      </span>
    </div>
  );
}
