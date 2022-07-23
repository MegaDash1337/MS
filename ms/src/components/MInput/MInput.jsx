import React from "react";
import styles from "./MInput.module.css";

export default function MInput({ value, onChange, placeholder }) {
  return (
    <>
      <input
        className={styles.m_input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <br />
    </>
  );
}
