import React, { useState, useCallback } from "react";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import authService from "../../services/authService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
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

    if (username.length === 0 || password.length === 0) {
      setValidationError("Please enter a username and password");
      alert("Please enter email and password");
      setLoading(false);
      return;
    }
    // TODO: replace by api call custom hook
    // await axios
    //   .post(url, {
    //     username,
    //     password,
    //   })
    //   .then((response) => {
    //     localStorage.setItem("login_info", JSON.stringify(response.data.token));
    //     history.push("/posts");
    //   })
    //   .catch((error) => {
    //     setError("Incorrect username or password");
    //     alert("Incorrect email/password!");
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    let response = await authService(username, password);
    if (response) {
      history.push("/posts");
      setLoading(false);
    } else {
      setError("Incorrect username or password");
      alert("Incorrect email/password!");
      setLoading(false);
    }
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
