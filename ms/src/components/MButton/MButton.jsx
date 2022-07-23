import React from "react";
import styles from "./MButton.module.css";

export default function MButton({ value }) {
  return <button className={styles.m_button}>{value}</button>;
}
