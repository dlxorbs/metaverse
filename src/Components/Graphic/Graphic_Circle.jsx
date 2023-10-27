import React from "react";
import styles from "./Graphic_Circle.module.css";
export default function Graphic_Circle(props) {
  return (
    <div className={styles.Graphic_Circle}
         style={{'--left':props.left+'px','--top':props.top+'px', '--size':props.size+'px'}}
    >
        <div style={{'--size':props.size+'px'}}></div>
    </div>
  );
}
