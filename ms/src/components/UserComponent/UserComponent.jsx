import React from "react";
import styles from "./UserComponent.module.css";

export default function UserComponent({ name, shortName }) {
  return (
    <div className={styles.user_component}>
      <p className={styles.name_element}>{name}</p>
      <p className={styles.shortname_element}>@{shortName}</p>
    </div>
  );
}
