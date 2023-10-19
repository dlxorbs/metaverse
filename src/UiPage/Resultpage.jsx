import { React, useState } from "react";
import styles from "./Uipage.module.css";

export default function Resultpage() {

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
            <h1>시간별 동선과 겹치는 정도</h1>
        </div>
    </div>
  );
}
