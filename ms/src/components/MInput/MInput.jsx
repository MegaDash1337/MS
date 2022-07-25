import React from "react";
import styles from "./MInput.module.css";

export default function MInput({ value, onChange, placeholder, style }) {
  return (
    <>
      <input
        className={styles.m_input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
      <br />
    </>
  );
}
