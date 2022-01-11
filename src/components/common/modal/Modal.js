import React, { useState } from "react";
import styles from "./Modal.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Modal = ({ isClicked, setIsClicked }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const blogUrl =
    "https://dev-first-wp-test.pantheonsite.io/wp-json/wp/v2/posts";

  const formDataHandler = async () => {
    setLoading(true);
    if (title.length === 0 || content.length === 0) {
      setValidationError("Please enter a title and Content");
      alert("Please enter a title and Content");
      setLoading(false);
      return;
    }

    const token = JSON.parse(localStorage.getItem("login_info"));

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWZpcnN0LXdwLXRlc3QucGFudGhlb25zaXRlLmlvIiwiaWF0IjoxNjQxNDc1MzE3LCJuYmYiOjE2NDE0NzUzMTcsImV4cCI6MTY0MjA4MDExNywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.mSpDIGXnV4W18hA0jyTjbfMv28sK4emm3X63qt-eMG8}`,
    };
    let data = {
      title,
      content,
      status: "publish",
    };

    await axios
      .post(blogUrl, data, { headers })
      .then((response) => {
        console.log(response);
        alert("Post has been successfully added!");
        setIsClicked(!isClicked);
        // history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setError("Incorrect username or password");

        // alert("Incorrect email/password!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="8"
          className={styles.modal_textarea_input}
          placeholder="Blog Details"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="button"
          className={styles.modal_button}
          onClick={formDataHandler}
        >
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

//TODO: on modal open/close click whole allpost component rerendered
//FIXME: Have to fix it
