import React, { useState } from "react";
import MemesData from "./memesData"
import memesData from "./memesData";

export function MainBody(){

    const [meme,setMeme] = useState(
            {
                topText : "",
                bottomText : "",
                randomImage : "http://i.imgflip.com/1bij.jpg"

            }
    )

    const [allMemeImages,setAllMemeImages] = useState(memesData)


    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        })
        )
    }
    return(
        <>
        <div className="w-full h-full">
            <div className="flex">
            <input type="text" placeholder="Please Enter Top Text" className="w-1/2 border-2 border-gray-200 m-3
            p-2 rounded-lg"/>
            <input type="text" placeholder="Please Enter Bottom Text" className="w-1/2 border-2 border-gray-200 m-3 rounded-lg p-2"/>
            </div>
            <button type="submit" className="bg-gradient-to-r from-purple-900 to-purple-500 ... p-2 rounded-xl text-white font-bold w-full" onClick={getMemeImage}>Get a new meme image  🖼</button>
            <img src={meme.randomImage} className="h-fit w-full p-3"/>
        </div>
        </>
    )
}