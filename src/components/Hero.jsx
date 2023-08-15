import React from "react";
import logo from "../images/Group77.png"

export default function Hero(){
    return(
        <div>
            <div className="justify-center items-center flex pt-3">
            <img src={logo}/>
            </div>
            <div className="text-black font-mono font-bold text-left ml-20 pt-5 text-2xl">
                Online Experience
            </div>
            <div className="text-sm ml-20 pt-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laboriosam natus expedita minus hic corporis inventore amet, quisquam repellendus sunt, exercitationem dolor debitis dignissimos suscipit provident quod laudantium quo ducimus.</div>
        </div>
    )
}