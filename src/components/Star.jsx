import React from "react";
import StarCard from "../images/star.svg"
import FillStar from "../images/fillStar.svg"

export default function Star(props){
    let starIcon = props.isFilled ? StarCard : FillStar
    return(
        <>
        <img src={starIcon} className="w-12 h-12 p-3" onClick={props.handleClick}/>
        </>
    )
    
}