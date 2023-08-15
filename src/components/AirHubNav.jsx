import React from "react";
import logo from "../images/airhub.png"

export default function AirHubNav(){
    return(
        <div>
            <div className="w-full bg-white shadow-md">
            <img src={logo} className="p-5 w-40 h-30"/>
            </div>
        </div>
    )
}