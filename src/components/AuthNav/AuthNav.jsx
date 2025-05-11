import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  
    const setActiveClass = ({ isActive }) => {
      return clsx(s.link, isActive && s.active);
    };
  return (
    <div className={s.authNav}>
      <NavLink to="/login" className={ setActiveClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={ setActiveClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
