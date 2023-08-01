import React from "react";

export const Form = ({ ref, onSubmit }) => {
  return (
    <form ref={ref} onSubmit={onSubmit}>
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
  );
};
