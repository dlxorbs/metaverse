import { React, useState } from "react";
import "../index.css";

import Button from "../Components/Button/Buttons";
import TitleHead from "../Components/Title/Titlehead";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SideBar/Sidebar";
import Sidebarleft from "../Components/SideBar/Sidebarleft";
import BigSidebar from "../Components/SideBar/BigSidebar";

function createMarkup() {
  return {
    __html: `<!DOCTYPE html>
      <html>
        <head>
          <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
          <script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-physics-system@v4.2.2/dist/aframe-physics-system.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@fb96ab2/dist/aframe-extras.js"></script>
          <script src="https://recast-api.donmccurdy.com/aframe-inspector-plugin-recast.js"></script>
          <script
            src="https://code.jquery.com/jquery-3.7.0.min.js"
            integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
            crossorigin="anonymous"
          ></script>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <a-scene id="first">
            <!-- 에셋 제작 -->
            <a-asset>
            
              <a-asset-item id="npc" src="./glb/human2.glb"></a-asset-item>
              <a-asset-item
                id="map"
                src="https://cdn.glitch.me/6fa6aec4-5e4b-465e-ae5e-092f559a7f71/metaverse.glb?v=1688481055830"
              ></a-asset-item>
              <a-asset-item
                id="nav-mesh"
                src="https://cdn.glitch.global/6fa6aec4-5e4b-465e-ae5e-092f559a7f71/nav.glb?v=1688481354605"
              ></a-asset-item>
            </a-asset>
      
            <a-box></a-box>
            <a-sky color="#99ccff" radius="400"></a-sky>
          </a-scene>
        </body>
     
      </html>
      //스크립트 태그
      `,
  };
}

export default function Mainpage() {
  const [fileName, setfileName] = useState("첨부파일을 넣어주세요.");

  return (
    <div className="PageWrapper">
      <Header></Header>
      <div className="sideWrapper">
        <BigSidebar
          valueMap={fileName}
          placeholderMap={fileName}
          onChangeMap={(e) => {
            setfileName(e.target.value);
          }}
        ></BigSidebar>
        <div className="frame" dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </div>
  );
}
