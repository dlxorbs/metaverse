import {React, useEffect, useState} from "react";
import styles from "./Uipage.module.css";
import {ReactComponent as Map} from "../Components/Img/Map.svg";
import {ReactComponent as Map_vertical} from "../Components/Img/Map_vertical.svg";
import {ReactComponent as Map_section} from "../Components/Img/Map_section.svg";
import Graphic_Circle from "../Components/Graphic/Graphic_Circle";

import Section_Card from "../Components/Card/Section_Card";

export default function Resultpage() {
    function Img(props) {
        return <div className={styles.Img}>{props.children}</div>;
    }

    const Data_List = [1, 2, 3, 4]
    const a = 1
    const Section_Card_List = Data_List.map(
        (number) => (<Section_Card number={number} key={number}/>)
    )

    const [data, setData] = useState([])
    // useEffect(function () {
    //     async function fetchLocationData() {
    //         try {
    //             const response = await fetch(process.env.PUBLIC_URL + 'data.json');
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch data");
    //             }
    //             const data = await response.json();
    //             setData(data.locationdata);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     console.log(data)
    //     }
    //     fetchLocationData();
    // }, []);
    
    useEffect(function () {
        db.collection('post').get().then(function(qs){
            qs.forEach(function(doc){
                console.log(doc.data())
            })
        })
    })

    let radius = 0;

    // const [radius, setRadius] = useState(40);
    const Circle_List = data.map((item, index) => {
        const dataX = (-parseFloat(item.X) + 47.6)*4.628;
        const dataZ = (parseFloat(item.Z) + 154.29)*4.628;
        
        let distance = 0;

        if(index !== 0){
            const x1 = parseFloat(data[index -1].X);
            const z1 = parseFloat(data[index -1].Z);
            const x2 = parseFloat(data[index].X);
            const z2 = parseFloat(data[index].Z);
            distance = Math.sqrt((x2 - x1) ** 2 + (z2 - z1) ** 2);
        }

        if (distance < 1) {
            radius = radius + 1;
            if (radius > 15.0) {
              radius = 15;
            }
          } else {
            radius = 3;
          }

        return (
          <Graphic_Circle
            top={dataX}
            left={dataZ}
            size={radius*8}
            number={item}
            key={index}
          />
        );
      });

    return (
        <div className={styles.result}>
            <div className={styles.Fixedarea}>
                <h1>결과 값</h1>
                <div className={styles.Resultnumber}>
                    <div>
                        <h2>54.6%</h2>
                        <p>예상 동선과 겹치는 비율</p>
                    </div>
                    <div>
                        <h2>23.3%</h2>
                        <p>전체 공간 탐색 비율</p>
                    </div>
                    <div>
                        <h2>16.0s</h2>
                        <p>평균 공간 체류 시간</p>
                    </div>
                    <div>
                        <h2>1명</h2>
                        <p>중요 이벤트와 상호작용X</p>
                    </div>
                </div>
            </div>
            <div className={styles.Movearea}>
                <div className={styles.foot_traffic}>
                    <h1>시간별 동선과 겹치는 정도</h1>
                    <Img>
                        <div className={styles.Drawing_circle}>
                            <Map height={442}></Map>
                            {Circle_List}
                        </div>
                    </Img>
                </div>
                <div className={styles.flex_box}>
                    <div className={styles.foot_traffic2}>
                        <h1>구역별 개요</h1>
                        <div>
                            {Section_Card_List}
                        </div>
                    </div>
                    <div className={styles.zone}>
                        <h1>Map</h1>
                        <Img>
                            <Map_section
                                width={337}
                                height={860}
                            ></Map_section>
                        </Img>
                    </div>
                </div>
            </div>
        </div>
    );
}