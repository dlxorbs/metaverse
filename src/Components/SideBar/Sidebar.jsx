import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as Box } from "../Icons/box.svg";
import { ReactComponent as Checkcircle } from "../Icons/check-circle.svg";
import { ReactComponent as Gitbranch } from "../Icons/git-branch.svg";
import { ReactComponent as Helpcircle } from "../Icons/help-circle.svg";
import { ReactComponent as Map } from "../Icons/map.svg";
import { ReactComponent as Result } from "../Icons/result.svg";

function Icons(props) {
  return <div className={styles.icons}>{props.children}</div>;
}

export default function Sidebar(props) {

  return (
    <div className={styles.Sidebar}>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => props.handleIconClick("map")}
        >
          {props.selectedIcon === "map" ? <div className={styles.box}></div> : ""}
          <Map
            width={32}
            height={32}
            stroke={props.selectedIcon === "map" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => props.handleIconClick("box")}
        >
          {props.selectedIcon === "box" ? <div className={styles.box}></div> : ""}
          <Box
            width={32}
            height={32}
            stroke={props.selectedIcon === "box" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => props.handleIconClick("gitbranch")}
        >
          {props.selectedIcon === "gitbranch" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Gitbranch
            width={32}
            height={32}
            stroke={props.selectedIcon === "gitbranch" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => props.handleIconClick("checkcircle")}
        >
          {props.selectedIcon === "checkcircle" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Checkcircle
            width={32}
            height={32}
            stroke={props.selectedIcon === "checkcircle" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => props.handleIconClick("result")}
        >
          {props.selectedIcon === "result" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Result
            width={32}
            height={32}
            stroke={props.selectedIcon === "result" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
      <Icons>
        <div
          className={styles.iconWrapper}
          onClick={() => props.handleIconClick("helpcircle")}
        >
          {props.selectedIcon === "helpcircle" ? (
            <div className={styles.box}></div>
          ) : (
            ""
          )}
          <Helpcircle
            width={32}
            height={32}
            stroke={props.selectedIcon === "helpcircle" ? "#cecece" : "#5e616d"}
          />
        </div>
      </Icons>
    </div>
  );
}
