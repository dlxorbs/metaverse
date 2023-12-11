import React from "react";
import styles from "./Graphic_Circle.module.css";
export default function Graphic_Circle(props) {
  const number = `Color${props.number}`;
  const display = props.visible ? 'block' : 'none';
  return (
    <div className={`${styles.Graphic_Circle} ${styles[number]}`}
         style={{'--left':props.left+'px',
                '--top':props.top+'px',
                '--size':props.size+'px',
                'display':display}}
    >
        <div style={{'--size':props.size+'px'}}></div>
    </div>
  );
}