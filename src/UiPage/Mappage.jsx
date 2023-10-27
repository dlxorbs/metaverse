import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./Uipage.module.css";


  function Model() {
    const modelRef = useRef();
    
    useFrame(() => {
      modelRef.current.rotation.y += 0.002;
      modelRef.current.position.y = -1;
    });
  
    // gltf파일을 로드합니다.
    const gltf = useGLTF("https://cdn.glitch.me/6fa6aec4-5e4b-465e-ae5e-092f559a7f71/metaverse.glb?v=1688481055830");
    gltf.scene.scale.set(0.04, 0.04, 0.04);
  
    return <primitive ref={modelRef} object={gltf.scene} />;
  }

export default function Mappage(props) {

    return (
        <div className={styles.map}>
            {props.fileName === "첨부파일을 넣어주세요." ? <span>아직 맵이 없어요.</span> :
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={3.5}/>
                    <Model />
                    <OrbitControls />
                </Canvas>
            }
        </div>
    );
}