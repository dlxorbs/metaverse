import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Buttons from "../Button/Buttons.jsx";

export default function TextInput(props) {
  const [isThirdDivClicked, setThirdDivClicked] = useState(false);

  const handleThirdDivClick = () => {
    setThirdDivClicked(true);
  };

  return (
    <>
      {props.inputtext === "text" && (
        <div className={styles.TextInput}>
          <div>
            <input type="text" />
            <textarea type="text" />
            <div className={styles.Grid}>
              <div></div>
              <div></div>
              <div></div>
              <div
                className={isThirdDivClicked ? styles.HighlightedDiv : ""}
                onClick={handleThirdDivClick}
              ></div> {/* 세 번째 div */}
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Buttons
              selectedIcon={props.selectedIcon}
              onClick={() => props.setInputText('none')}
            ></Buttons>
          </div>
        </div>
      )}
    </>
  );
}
