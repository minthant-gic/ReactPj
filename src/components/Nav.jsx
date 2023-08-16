import React from "react";
import logo from "../images/TrollFace.png";

export default function Nav() {
  return (
    <>
      <div className="justify-between items-center flex bg-gradient-to-r from-purple-900 to-purple-500 ...">
        <div className=" w-full h-20 flex">
          <img src={logo} alt="header" className="w-17 p-5" />
          <div className="justify-center items-center flex font-mono font-bold text-white text-2xl">
            Meme Generator
          </div>
        </div>
        <div className="text-white font-mono pr-5 text-right w-full">
            React Course - Project 3</div>
      </div>
    </>
  );
}
