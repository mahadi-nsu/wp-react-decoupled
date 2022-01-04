import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isClicked, setIsClicked }) => {
  console.log(isClicked);
  console.log(setIsClicked);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={styles.modal_hero}>
      <div className={styles.modal_inputs}>
        <input
          type="text"
          className={styles.modal_text_input}
          placeholder="Blog Title"
        />

        <textarea
          rows="8"
          className={styles.modal_textarea_input}
          placeholder="Blog Details"
        />

        <button type="button" className={styles.modal_button}>
          Post Blog
        </button>

        <button
          type="button"
          className={styles.modal_close}
          onClick={clickHandler}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
