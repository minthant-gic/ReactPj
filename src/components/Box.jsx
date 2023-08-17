import React, { useState } from "react";

export default function Box(props){
    const styles ={
        backgroundColor: props.on? "#222222" : "transparent"
    }

    return(
        <>
        <div style={styles} className="flex border border-black w-10 h-10" onClick={props.toggle}></div>
        </>
    )
}