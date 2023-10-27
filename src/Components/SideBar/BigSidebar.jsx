import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Sidebarleft from "./Sidebarleft";
import Space_Card from "../Card/Space_Card";
import Contextcard from "../Title/Contextcard";
import styles from "./Sidebar.module.css";
import TitleHead from "../Title/Titlehead";
import TextInput from "../SideBar/TextInput";

import InteractionButton from "../Button/InteractionButton";
import InteractionTab from "../Button/InteractionTab";

import { ReactComponent as Box } from "../Icons/box.svg";
import { ReactComponent as Obj } from "../Icons/obj.svg";
import { ReactComponent as People } from "../Icons/people.svg";

export default function BigSidebar(props) {


  const text = {
    "map":{
      "Title":'맵관리',
      "Content":'사용성을 탐색하고 싶은 맵을 넣는 시작단계입니다. 맵을 둘러보면서 사용성을 탐색하기전 준비를 할 수 있습니다.'
    },
    "box":{
      "Title":'공간 지정',
      "Content":'각 맵의 일부 구역에 이름을 붙입니다. 각 공간에 따라서 관찰 정보를 관리할 수 있습니다.'
    },
    "gitbranch":{
      "Title":'동선 부여',
      "Content":'사용자가 이동하는 예상 이동 경로를 설정합니다. 최대 경로 지점은 15개까지 설정 가능합니다.'
    },
    "checkcircle":{

    },
    "result":{
      "Title":'결과 대쉬보드',
      "Content":'맵을 통해 수집된 정보들을 볼 수 있습니다. 미션이나 사용자에 따라서 각자 결과들을 따로 볼 수 있습니다.'
    },
    "play":{
      "Title":'',
      "Content":''
    }
  }
  const text2 = [
    "사용자 동선에 있어서 가장 접근성이 높은 부분. 출구와 가까워야 하고, 인원의 대기 시간을 확인해야함",
    "가장 이야기가 많이 나누어지는 공간, 이 공간 내에서 인원들의 이야기 시간을 측정할 필요가 있음",
    "가장 먼저 기업 간판이 보이는 공간, 이 공간 내에서 사용자의 시선에서 간판의 가시성을 측정할 필요가 있음",
    "정보 접근성 중요"
  ]

  const title = props.selectedIcon ? text[props.selectedIcon].Title : '';
  const Content = props.selectedIcon ? text[props.selectedIcon].Content : '';

  //결과 대쉬보드에서 tab 인터렉션별 <-> 사용자별
  const [tab, setTab] = useState("inter");

  //공간지정에서 텍스트 나오는 부분
  const [inputtext, setInputText] = useState("text");

  
  function Icons(props) {
    return <div className={styles.icons}>{props.children}</div>;
  }

  return (
    <div className={styles.BigSidebar}>
      <Sidebar
        selectedIcon={props.selectedIcon}
        handleIconClick={props.handleIconClick}
      ></Sidebar>
      {props.selectedIcon === "play" ? '' : 
      <Sidebarleft
      children={
        <div className={styles.SideWrapper}>
          {(props.selectedIcon === "map" || 
            props.selectedIcon === "result") ? 
          <TitleHead
            Title={title}
            Content={Content}
          ></TitleHead>:
          <TitleHead
            Title={title}
            Content={Content}
            type={"buttontype"}
            selectedIcon = {props.selectedIcon}
            inputtext={inputtext} setInputText={setInputText}
          ></TitleHead>
          }
          {props.selectedIcon === "map" && <div>
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
          ></Contextcard></div>}
          {props.selectedIcon === "box" && <div><TextInput selectedIcon={props.selectedIcon} inputtext={inputtext} setInputText={setInputText}></TextInput></div>}
          {props.selectedIcon === "box" && <div><Space_Card num={1} title={"출구 공간"} color={"#6BDD35"} text={text2[0]}/><Space_Card num={2} title={"이야기 중점 공간"} color={"#35DDDD"} text={text2[1]}/><Space_Card num={3} title={"기업 확인 공간"} color={'#C635DD'} text={text2[2]}/><Space_Card num={4} title={"안내데스크 공간"} color={"#DDCD35"} text={text2[3]}/></div>}


          {/* 리설트일때 왼쪽 사이드바 */}
          {props.selectedIcon === "result" && <div><InteractionTab tab={tab} setTab={setTab}></InteractionTab>
          <div className={styles.InteractionButtons}>
            <InteractionButton text={'공간 인터렉션'} highlight={"highlight"}>
                <Box
                  width={32}
                  height={32}
                  stroke="white"
                ></Box>
            </InteractionButton>
            <InteractionButton text={'사물 인터렉션'}>
              <Obj
                width={32}
                height={32}
                stroke="white"
              ></Obj>
            </InteractionButton>
            <InteractionButton text={'사람 인터렉션'}>
              <People
                width={32}
                height={32}
                stroke="white"
              ></People>
            </InteractionButton>
          </div>
          </div>}
        </div>
      }
    />
      }
      
    </div>
  );
}
