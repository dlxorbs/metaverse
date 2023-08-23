import React from "react";
import Sidebar from "./Sidebar";
import Sidebarleft from "./Sidebarleft";
import Contextcard from "../Title/Contextcard";
import styles from "./Sidebar.module.css";
import TitleHead from "../Title/Titlehead";

export default function BigSidebar(props) {
  return (
    <div className={styles.BigSidebar}>
      <Sidebar></Sidebar>
      <Sidebarleft
        children={
          <div className={styles.SideWrapper}>
            <TitleHead></TitleHead>
            <Contextcard
              value={props.valueMap}
              placeholder={props.placeholderMap}
              type={"buttontype"}
              Title={"Map"}
              context={""}
              onChange={props.onChangeMap}
            ></Contextcard>
            <Contextcard
              value={props.valueNav}
              placeholder={props.placeholderNav}
              type={"buttontype"}
              Title={"NAV-MESH"}
              context={""}
              onChange={props.onChangeNav}
            ></Contextcard>
          </div>
        }
      />
    </div>
  );
}
