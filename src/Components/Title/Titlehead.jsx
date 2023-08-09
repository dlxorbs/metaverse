import React from "react";
import styles from "./Title.module.css";
import Button from "../Button/Buttons";

export default function TitleHead(props) {
  return (
    <div className={styles.TitleHead}>
      <h1>{props.Title || "제목"}</h1>
      <span>{props.content || "콘텐트"}</span>

      {props.type == "buttontype" ? <Button /> : ""}
    </div>
  );
}
