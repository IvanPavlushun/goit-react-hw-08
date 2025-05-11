import React, { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ onClose, onConfirm, contactName }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Delete contact</h3>
        <p>
          Are you sure you want to delete <strong>{contactName}</strong>?
        </p>
        <div className={s.buttons}>
          <button className={s.cancel} onClick={onClose}>
            Cancel
          </button>
          <button className={s.confirm} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;