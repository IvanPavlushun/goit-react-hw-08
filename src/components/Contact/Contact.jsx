import React, { useState } from "react";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
    setShowModal(false);
  };

  return (
    <>
      <div className={s.box}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <FaUser /> {name}
          </li>
          <li className={s.listItem}>
            <FaPhoneAlt /> {number}
          </li>
        </ul>
        <button className={s.button} onClick={() => setShowModal(true)}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal
          contactName={name}
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default Contact;
