import React from "react";
import styles from "./Buttons.module.css";
export default function Button(props) {
  return (
    <button className={styles.actionButton} onClick={props.onClick}>
      {props.selectedIcon == 'box' && <span>{props.text || "공간추가"}</span>}
      <div className={styles.buttonanimation}></div>
    </button>
  );
}
