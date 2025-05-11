import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import AuthNav from "../AuthNav/AuthNav"; 
import UserMenu from "../UserMenu/UserMenu"; 

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.box}>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={setActiveClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
