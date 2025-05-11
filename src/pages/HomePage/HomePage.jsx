import React from "react";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>Welcome to Contacts App!</h1>
        <p className={s.subtitle}>
          Store and manage your contacts easily and securely. Join us now!
        </p>
        <div className={s.buttons}>
          <Link to="/login" className={s.button}>Login</Link>
          <Link to="/register" className={s.buttonSecondary}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
