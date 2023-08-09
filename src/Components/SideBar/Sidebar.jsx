import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as Box } from "../Icons/box.svg";
import { ReactComponent as Checkcircle } from "../Icons/check-circle.svg";
import { ReactComponent as Gitbranch } from "../Icons/git-branch.svg";
import { ReactComponent as Helpcircle } from "../Icons/help-circle.svg";
import { ReactComponent as Map } from "../Icons/map.svg";

function Icons(props) {
  return <div className={styles.icons}>{props.children}</div>;
}

export default function Sidebar() {
  const [selectedIcon, setSelectedIcon] = useState("box");

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className={styles.Sidebar}>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => handleIconClick("box")}
        >
          {selectedIcon === "box" ? <div className={styles.box}></div> : ""}
          <Box
            width={32}
            height={32}
            stroke={selectedIcon === "box" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => handleIconClick("checkcircle")}
        >
          {selectedIcon === "checkcircle" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Checkcircle
            width={32}
            height={32}
            stroke={selectedIcon === "checkcircle" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => handleIconClick("gitbranch")}
        >
          {selectedIcon === "gitbranch" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Gitbranch
            width={32}
            height={32}
            stroke={selectedIcon === "gitbranch" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => handleIconClick("helpcircle")}
        >
          {selectedIcon === "helpcircle" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Helpcircle
            width={32}
            height={32}
            stroke={selectedIcon === "helpcircle" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => handleIconClick("map")}
        >
          {selectedIcon === "map" ? <div className={styles.box}></div> : ""}
          <Map
            width={32}
            height={32}
            stroke={selectedIcon === "map" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
    </div>
  );
}
