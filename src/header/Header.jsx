import React, { useState } from "react";
import Home from "../Home/Home";
import "./header.css";
export const Header = () => {
  return (
    <>
      <div className="side-navbar">
        <span className="up-nav"></span>
        <p className="new1">NEW</p>
        <p className="patients">PATIENT</p>
        <p className="uploads">UPLOAD</p>
        <p className="resport">REPORT</p>
        <p className="setting">SETTING</p>
        <p className="logout">LOGOUT</p>
      </div>
      <Home/>
    </>
  );
};
