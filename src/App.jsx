import "./App.css";
import Nav from "./components/Nav"
import { MainBody } from "./components/MainBody";
import Card from "./components/Card";
import { useState } from "react";
import boxes from "./components/boxes";
import Box from "./components/box";
import Message from "./components/Message";

function App() {
  const [square, setSquare] = useState(boxes)

  const squareElement = square.map(square =>(
    <Box key={square.id}  on={square.on} toggle={()=>toggle(square.id)}/>
  ))

  function toggle(id){
    setSquare(prevSquare =>{
      return prevSquare.map((square) =>{
        return square.id === id ? {...square,on : !square.on} : square
      })
    }
    )
  }
  return (
    <>
      {/* <Nav />
      <MainBody /> */}
      {/* <Card /> */}
      {/* {squareElement} */}
      <Message />
    </>
  );
}

export default App;
