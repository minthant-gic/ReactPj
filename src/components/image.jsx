import React from "react";

export default function image(){
    function handleClick(){
        console.log("I was clicked!")
    }
    return(
        <>
        <div className="justify-center items-center m-3">
            <img src="https://picsum.photos/640/360"/>
            <button onClick={handleClick}>Click me</button>
        </div>
        </>
    )
}