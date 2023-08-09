import React from "react";
import Sidebar from "./Sidebar";
import Sidebarleft from "./Sidebarleft";
import Contextcard from "../Title/Contextcard";
import styles from "./Sidebar.module.css";
import TitleHead from "../Title/Titlehead";

export default function BigSidebar() {
  return (
    <div className={styles.BigSidebar}>
      <Sidebar></Sidebar>
      <Sidebarleft
        children={
          <div className={styles.SideWrapper}>
            <TitleHead></TitleHead>
            <Contextcard
              type={"buttontype"}
              Title={"Map"}
              context={""}
            ></Contextcard>
            <Contextcard
              type={"buttontype"}
              Title={"NAV-MESH"}
              context={""}
            ></Contextcard>
          </div>
        }
      />
    </div>
  );
}
