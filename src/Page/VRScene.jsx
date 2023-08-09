import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

export default function VRScene() {
  return (
    <Scene class="scene">
      <Entity
        class={"a"}
        park={""}
        geometry={{ primitive: "box" }}
        material={{ color: "red" }}
        position={{ x: 0, y: 0, z: -5 }}
      />
      <Entity particle-system={{ preset: "snow" }} />
      <Entity light={{ type: "point" }} />
      <Entity text={{ value: "Hello, WebVR!" }} />
    </Scene>
  );
}
