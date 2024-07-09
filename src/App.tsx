import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App() {

const [game, setGame]= useState({
  id: 1,
  player:{
    name:"John"
  }
})

const handleClick = () => {
  setGame({
    ...game , player:{...game.player , name:"Ziyad"}
  })
}

  return (
    <div>
     <p> {game.player.name}</p>
     <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
