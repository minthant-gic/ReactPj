import React, { useState } from "react";

export default function Message(){
    const [message,setMessage] = useState([])
    return(
        <>
        <div>
            {message.length === 0 ? <h1>You are all caught up!</h1> :
            <h1>You have {message.length} unread {message.length > 1 ? "messages" : "message"}</h1>}
        </div>
        </>
    )
}