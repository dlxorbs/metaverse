import { React, useState } from "react";
import "../index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


import Button from "../Components/Button/Buttons";
import TitleHead from "../Components/Title/Titlehead";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SideBar/Sidebar";
import Sidebarleft from "../Components/SideBar/Sidebarleft";
import BigSidebar from "../Components/SideBar/BigSidebar";

import mapImg_top from "../Components/Img/mapImg_top.png";

import Mappage from "../UiPage/Mappage";
import Resultpage from "../UiPage/Resultpage";

export default function Mainpage() {
  const [fileName, setfileName] = useState("첨부파일을 넣어주세요.");
  const [navfileName, setnavfileName] = useState("네비게이션 파일을 넣어주세요.");

  const [selectedIcon, setSelectedIcon] = useState("result");
  // 선택된 아이콘

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };
  // 현재 선택된 아이콘으로 selectedIcon을 바꿔줌
  
  return (
    <div className="PageWrapper">
      <Header></Header>
      <div className="sideWrapper">
        <BigSidebar
          selectedIcon={selectedIcon}
          handleIconClick={handleIconClick}
          valueMap={fileName}
          placeholderMap={fileName}
          valueNav={navfileName}
          onChangeMap={(e) => {
            setfileName(e.target.value);
          }}
        ></BigSidebar>
        {selectedIcon === "map" && <Mappage fileName={fileName}/>}
        {selectedIcon === "box" && <div className="Boxframe">
            <span></span>
            <span></span>
            <span></span>
            <img src={mapImg_top} alt=""></img>
          </div>}
        {selectedIcon === "gitbranch" && <div></div>}
        {selectedIcon === "result" && <Resultpage/>}
        {selectedIcon === "play" && <div className="frame">
            <iframe
              title="Local Page"
              src="http://211.248.120.68:9876/"
              frameborder={0} framespacing={0} marginheight={0} marginwidth={0}  vspace={0}
            ></iframe>
          </div>}
      </div>
    </div>
  );
}
