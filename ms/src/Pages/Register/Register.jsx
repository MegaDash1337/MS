import React, { useState } from "react";
import styles from "./Register.module.css";
import MInput from "../../components/MInput/MInput.jsx";
import {
  CheckShortname,
  Register as RegisterUser,
} from "../../API/UserService.ts";
import MButton from "../../components/MButton/MButton.jsx";
import User from "../../Models/User.ts";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [shortName, setShortName] = useState("");
  const [error, setError] = useState("");

  async function submitRegister(event) {
    event.preventDefault();

    if (!validateFields()) {
      setError("Поля не могут быть пустыми!");
      return;
    }

    const user = new User(name, password, email, shortName);

    try {
      const registred = await RegisterUser(user);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  function changeName(event) {
    setName(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changeShortName(event) {
    setShortName(event.target.value);
  }

  function validateFields() {
    return name !== "" && password !== "" && email != "" && shortName != "";
  }

  return (
    <div className={styles.register_element}>
      <div className={styles.register_container}>
        <h1 style={{ textAlign: "center", marginBottom: 50, marginTop: 10 }}>
          Регистрация
        </h1>

        <div
          style={{
            color: "red",
            fontSize: 10,
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          {error}
        </div>
        <form onSubmit={submitRegister} className={styles.register_form}>
          <MInput value={name} onChange={changeName} placeholder="Имя" />

          <MInput
            value={password}
            onChange={changePassword}
            placeholder="Пароль"
          />

          <MInput value={email} onChange={changeEmail} placeholder="Email" />

          <MInput
            value={shortName}
            onChange={changeShortName}
            placeholder="Короткое имя*"
          />

          <MButton value="Регистрация" />
        </form>

        <p
          style={{
            fontFamily: "Open Sans",
            fontStyle: "italic",
            fontSize: 10,
            margin: 10,
          }}
        >
          *Через короткое имя вас смогут найти другие пользователи по ссылке.
          Оно должно быть уникальным, состоять только из цифр, латинских букв и
          подчеркиваний и состоять из одного слова
        </p>
      </div>
    </div>
  );
}
