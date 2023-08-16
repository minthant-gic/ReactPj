import React, { useState } from "react";
import { ReactDOM } from "react";

export default function array(){
    const [thingsArray, setThingsArray] = useState(["Thing 1","Thing 2"])

    function addItem(){
        setThingsArray(prevState =>{
            return [...prevState,`Thing ${prevState.length + 1}`]
        })
    }

    const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return(
        <>
        <button onClick={addItem}>Add item</button>
        {thingElements}
        </>
    )
}