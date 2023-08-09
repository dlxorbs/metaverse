import React from "react";
import "./header.css";
import SmallBtn from "../Button/SmallBtn";

export default function Header(props) {
  return (
    <div className="header">
      <div className="dummy"></div>
      <div className="title">{props.title || "Untitled"}</div>
      <SmallBtn text={"맵등록"}></SmallBtn>
    </div>
  );
}
