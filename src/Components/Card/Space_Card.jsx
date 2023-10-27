import React from "react";
import styles from "./Section_Card.module.css";
import {ReactComponent as Profile} from "../Img/Profile.svg";

export default function Space_Card(props) {

  function Img(props) {
    return <div className={styles.Img}>{props.children}</div>;
  }

  return (
    <div className={styles.Space_Card}>
      <div className={styles.Title}><span style={{'--color':props.color}}></span><h5> {props.title} {props.num}</h5></div>
      <span className={styles.Text}>{props.text}</span>
    </div>
  );
}
