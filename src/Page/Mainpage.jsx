import React from "react";
import "../index.css";

import Button from "../Components/Button/Buttons";
import TitleHead from "../Components/Title/Titlehead";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SideBar/Sidebar";
import Sidebarleft from "../Components/SideBar/Sidebarleft";
import BigSidebar from "../Components/SideBar/BigSidebar";

export default function Mainpage() {
  return (
    <div className="PageWrapper">
      <Header></Header>
      <div className="sideWrapper">
        <BigSidebar></BigSidebar>
        <iframe className="frame" src="index2.html"></iframe>
      </div>
    </div>
  );
}
