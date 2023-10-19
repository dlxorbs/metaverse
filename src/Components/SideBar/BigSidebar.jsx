import React from "react";
import Sidebar from "./Sidebar";
import Sidebarleft from "./Sidebarleft";
import Contextcard from "../Title/Contextcard";
import styles from "./Sidebar.module.css";
import TitleHead from "../Title/Titlehead";

export default function BigSidebar(props) {


  return (
    <div className={styles.BigSidebar}>
      <Sidebar
        selectedIcon={props.selectedIcon}
        handleIconClick={props.handleIconClick}
      ></Sidebar>
      <Sidebarleft
        children={
          <div className={styles.SideWrapper}>
            <TitleHead
              Title={'맵관리'}
              Content={'사용성을 탐색하고 싶은 맵을 넣는 시작단계입니다. 맵을 둘러보면서 사용성을 탐색하기전 준비를 할 수 있습니다.'}
            ></TitleHead>
            {/* 타이틀헤드에 버튼 추가 시키기 */}
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
