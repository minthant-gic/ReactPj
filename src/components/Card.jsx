import React from "react";

export default function Card(props) {
  // let badgeText
  // if (props.status === 0) {
  //   badgeText = "Sold Out"
  // }else {
  //    badgeText = 
  // }
  return (
    <div>
      <div className="pt-10 ml-20 w-80 relative">
        <div className="w-15 h-15 relative">
          <img src={props.head} alt="Header" />
          <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-white text-gray-500 rounded-lg mt-2 ml-2">{props.status}</span>
        </div>
        <div className="flex">
          <img src={props.img} className="p-2 w-8" />
          <div className="text-gray-400 pt-1">{props.rating}</div>
          <div className="text-gray-400 pt-1">({props.count})</div>
          <div className="text-gray-400 pt-1">.{props.country}</div>
        </div>
        <div className="text-left text-gray-400 p-2">{props.detail}</div>
        <div className="text-left">
          <span className="font-bold p-2">From {props.price}$</span>
          <span className="text-gray-400 p-2">/ person</span>
        </div>
      </div>
    </div>
  );
}
