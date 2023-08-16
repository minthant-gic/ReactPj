import React, { useState } from "react";
import logo from "../images/person.png"
import Star from "../images/star.svg"
import FillStar from "../images/fillStar.svg"
import StarCard from "../components/Star"

export default function Card(){

    const [contact,setContact] = useState(
        {
            firstName : "Hello",
            lastName : "World",
            phone : "+9999999",
            email : "example@gmail.com",
            isFavorite : false
        }
    )

    function toggleFavorite(){
        setContact(prevContact => ({
            ...prevContact,
            isFavorite : !contact.isFavorite
        }))
    }

    return(
        <>
        <div className="flex justify-center">
            <div className="w-72 h-96 bg-white shadow-2xl rounded-lg px-4">
                <img src={logo} className="rounded-full bg-indigo-500 p-4"/>
               <StarCard isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                <div className="font-bold text-black text-xl text-left pl-3">{contact.firstName} {contact.lastName}</div>
                <div className="text-gray-200 text-left pl-3">{contact.phone}</div>
                <div className="text-gray-200 text-left pl-3">{contact.email}</div>
            </div>
        </div>
        
        </>
    )
}