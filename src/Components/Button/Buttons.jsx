import React from "react";
import styles from "./Buttons.module.css";
export default function Button(props) {
  return (
    <button className={styles.actionButton}>
      <span>{props.text || "버튼"}</span>
      <div className={styles.buttonanimation}></div>
    </button>
  );
}
