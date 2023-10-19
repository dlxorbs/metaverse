import { React, useState } from "react";
import "../index.css";

import Button from "../Components/Button/Buttons";
import TitleHead from "../Components/Title/Titlehead";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SideBar/Sidebar";
import Sidebarleft from "../Components/SideBar/Sidebarleft";
import BigSidebar from "../Components/SideBar/BigSidebar";

import Resultpage from "../UiPage/Resultpage";

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
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <a-scene id="first">
          <div class="miniMap">
            <div class="cha"></div>
            <div class="cha2"></div>
            <div class="map"></div>
          </div>
    
          <div class="btnUI">
            <button class="start">측정시작</button>
            <button class="end">측정끝</button>
          </div>
    
          <div class="sysUI">
            <div class="container file_select">
              <input type="file" id="input_file" />
              <button onclick="read(event)">가져오기</button>
            </div>
    
            <div class="container camera_select">
              <div class="camera_select_title">카메라 선택</div>
              <div class="camera_button">
                <button class="change change1" onclick="change1()">TOP VIEW</button>
                <button class="change change2" onclick="change2()">
                  NORMAL VIEW
                </button>
              </div>
            </div>
          </div>
    
          <!-- 에셋 제작 -->
          <a-asset>
            <a-asset-item
              id="character"
              src="https://cdn.glitch.global/1d4e7720-9782-4efe-a989-a9063f99c126/human.glb?v=1689124282337"
            ></a-asset-item>
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
          <!-- 이렇게 들어가야 카메라가 움직이는것을 받아올 수 있음 -->
          <a-entity
            id="rig"
            raycaster-decteted
            navmesh-constraint="navmesh:.navmesh; fall: 3; height: 0;"
            nav-agent
            movement-controls="constrainToNavMesh: true; speed:0.5"
            look-controls
            rotation-reader
          >
            <a-entity
              id="player"
              gltf-model="#character"
              animation-mixer="clip: default;"
              position="0 0 0"
              rotation="0 0 180"
              scale="1 1 1"
            ></a-entity>
            <a-entity camera id="camera" rotation="0 0 0" position="0 8 16">
              <a-cursor
                geometry="primitive: ring; radiusInner: 0; radiusOuter: 0"
                cursor="rayOrigin: mouse;"
                raycaster=" objects : .clickable; far : 1000;"
              ></a-cursor>
            </a-entity>
          </a-entity>
    
          <a-entity
            class="navmesh"
            nav-mesh
            gltf-model="#nav-mesh"
            scale="1.4 1.4 1.4"
            position="0 -1 0"
            visible="false"
          ></a-entity>
          <a-entity
            class="map"
            gltf-model="#map"
            scale="1.4 1.4 1.4"
            position="0 -1 0"
            visible="true"
            rotation="0 0 0"
          ></a-entity>
    
          <!-- 두번째 카메라 -->
          <a-entity id="cameraRig" position="0 24 8">
            <a-entity id="second-camera" camera look-controls></a-entity>
          </a-entity>
    
          <!-- 이동경로 저장 -->
          <a-entity id="positionMap" position="0 0 0"></a-entity>
    
          <a-sky color="#99ccff" radius="400"></a-sky>
        </a-scene>
      </body>
      <script>
        let player = document.querySelector("#player");
        let camera = document.querySelector("#camera");
        let rig = document.querySelector("#rig");
        //캐릭터 상하 회전 보정하는 함수
        AFRAME.registerComponent("rotation-reader", {
          tick: function () {
            const rotationx = rig.object3D.rotation.x * -1;
    
            //여기도 계산식을 써야될듯함 카메라 rig가 돈 값만큼 rotation을 줘야됨
            player.object3D.rotation.set(rotationx, 0, 0);
        
        });
        function init() {
          keys = {
            a: false,
            s: false,
            d: false,
            w: false,
            space: false,
          };
    
          document.body.addEventListener("keydown", function (e) {
            const key = e.code.replace("Key", "").toLowerCase();
            if (keys[key] !== undefined) {
              if (key == "spacebar") {
                spacebar = true;
                keys[key] = false;
              } else {
                keys[key] = true;
              }
              console.log(keys);
            }
          });
    
          document.body.addEventListener("keyup", function (e) {
            const key = e.code.replace("Key", "").toLowerCase();
            if (keys[key] !== undefined) {
              keys[key] = false;
            }
          });
        }
    
        function animate() {
          requestAnimationFrame(animate);
    
          if (keys.w) {
            player.setAttribute("animation-mixer", "clip: walk;");
          } else if (keys.s) {
            player.setAttribute("animation-mixer", "clip: walk;");
          } else if (keys.a) {
            player.setAttribute("animation-mixer", "clip: walk;");
          } else if (keys.d) {
            player.setAttribute("animation-mixer", "clip: walk;");
          } else if (keys.space) {
            player.setAttribute("animation-mixer", "clip: twerk;");
          } else {
            player.setAttribute("animation-mixer", "clip: default;");
          }
        }
    
        init();
        animate();
      </script>
      <script>
        // 소켓 열기
        let socket = io("http://localhost:8080");
        let data = {
          id: null,
          position: null,
          rotation: null,
          keys: null,
        };
    
        // 전체 세션 받아올 때 (상자 생성)
        socket.on("current-sessions", function (result) {
          for (let i in result) {
            if (result[i] != socket.id) {
              // 자기 자신이 아니라면
              $("a-scene").append(
                '<a-entity   animation-mixer="clip: default;" gltf-model = "https://cdn.glitch.global/1d4e7720-9782-4efe-a989-a9063f99c126/human.glb?v=1689124282337" scale = "1 1 1" id="' +
                  result[i] +
                  '" position="0 0 0"></a-entity>'
              );
            }
          }
        });
    
        // 나간 세션 받아올 때 (상자 삭제)
        socket.on("removed-sessions", function (result) {
          let _target = $("#" + result)[0];
          _target.remove();
        });
    
        // 다른 상자 데이터 받아올 때
        socket.on("server-to-client", function (result) {
          let _id = result.id;
          let _position = result.position;
          let _rotation = result.rotation;
          let _keys = result.keys;
          let _target = $("#" + _id)[0];
          if (_target != null) {
            // 자기 자신은 상자가 없으므로 제외
            _target.setAttribute("position", _position); // json 형태를 쓰려면 vanilla의 setAttribute만 작동
            _target.setAttribute("rotation", _rotation);
    
            requestAnimationFrame(animate);
    
            if (_keys.w) {
              _target.setAttribute("animation-mixer", "clip: walk;");
            } else if (_keys.s) {
              _target.setAttribute("animation-mixer", "clip: walk;");
            } else if (_keys.a) {
              _target.setAttribute("animation-mixer", "clip: walk;");
            } else if (_keys.d) {
              _target.setAttribute("animation-mixer", "clip: walk;");
            } else if (_keys.space) {
              _target.setAttribute("animation-mixer", "clip: twerk;");
            } else {
              _target.setAttribute("animation-mixer", "clip: default;");
            }
          }
        });
    
        // 50ms마다 전송
        setInterval(function () {
          let camera = document.querySelector("#rig"); // 카메라의 위치/회전 데이터 받아오기
          data.id = socket.id;
          data.position = camera.object3D.position;
          data.rotation = {
            // rotation만 받는 데이터가 다르므로 맞춰주기
            x: 0,
            y: (camera.object3D.rotation.y * 180) / Math.PI,
            z: (camera.object3D.rotation.z * 180) / Math.PI,
          };
    
          document.body.addEventListener("keydown", function (e) {
            const key = e.code.replace("Key", "").toLowerCase();
            if (keys[key] !== undefined) {
              if (key == "spacebar") {
                spacebar = true;
                keys[key] = false;
              } else {
                keys[key] = true;
              }
            }
          });
    
          document.body.addEventListener("keyup", function (e) {
            const key = e.code.replace("Key", "").toLowerCase();
            if (keys[key] !== undefined) {
              keys[key] = false;
            }
          });
    
          data.keys = keys;
    
          socket.emit("client-to-server", data);
        }, 50);
      </script>
      <script src="./style.js"></script>
    </html>    
      `,
  };
}

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
        {/* <div className="frame" dangerouslySetInnerHTML={createMarkup()}></div> */}
        {selectedIcon === "result" ? 
          <div>
            <Resultpage></Resultpage>
          </div> : 
          <div className="frame" dangerouslySetInnerHTML={createMarkup()}>
          </div>}
      </div>
    </div>
  );
}
