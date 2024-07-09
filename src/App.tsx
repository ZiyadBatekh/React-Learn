import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App() {

const [pizza, setPizza]= useState({
  name: "Spicy pepperoni",
  toppings: ["Mushrom, "]
})

const handleClick = () => {
  setPizza({
   ...pizza , toppings:[...pizza.toppings , "Cheese"]
  })
}

  return (
    <div>
     <p> {pizza.toppings}</p>
     <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
