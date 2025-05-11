import React from "react";
import s from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={s.userMenu}>
      <p className={s.userName}>Welcome, {user.name}!</p>
      <button className={s.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
