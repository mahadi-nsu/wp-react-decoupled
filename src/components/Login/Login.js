import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const userPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = () => {
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
        Submit
      </button>
    </div>
  );
};

export default Login;
