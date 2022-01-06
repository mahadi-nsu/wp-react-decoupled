import React, { useState, useCallback } from "react";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const url =
    "https://dev-first-wp-test.pantheonsite.io/wp-json/jwt-auth/v1/token";

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const userPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    await axios
      .post(url, {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("login_info", JSON.stringify(response.data));
        history.push("/");
      })
      .catch((error) => {
        setError("Incorrect username or password");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log(username);
    console.log(password);
  };

  return (
    <div className={styles.login_hero}>
      <input
        type="text"
        className={styles.login_text_input}
        placeholder="User Name"
        value={username}
        onChange={userNameHandler}
      />
      <input
        type="password"
        className={styles.login_text_input}
        placeholder="Password"
        value={password}
        onChange={userPasswordHandler}
      />

      <button
        type="button"
        className={styles.login_button}
        onClick={submitHandler}
      >
        {loading ? <ClipLoader /> : "Submit"}
      </button>
    </div>
  );
};

export default Login;
