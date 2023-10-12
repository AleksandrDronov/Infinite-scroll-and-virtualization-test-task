import React from "react";
import styles from "./styles.module.css";

function Button({ children, onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
