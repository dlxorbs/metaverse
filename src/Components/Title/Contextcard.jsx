import { React, useState } from "react";
import styles from "./Title.module.css";
import $ from "jquery";

import Button from "../Button/Buttons";

function Fileinput(props) {
  const [fileName, setfileName] = useState("첨부파일을 넣어주세요.");
  return (
    <div className={styles.filebox}>
      <input
        className={styles.uploadName}
        value={fileName}
        placeholder={fileName}
      />
      <label for="file">{props.context || "파일추가"}</label>
      <input
        type="file"
        id="file"
        className={styles.file}
        onChange={(e) => {
          setfileName(e.target.value);
        }}
      />
    </div>
  );
}

export default function Contextcard(props) {
  return (
    <div className={`${styles.Contextcard}`}>
      <h1>{props.Title || "제목"}</h1>

      {props.type == "buttontype" ? <Fileinput context={props.context} /> : ""}
    </div>
  );
}
