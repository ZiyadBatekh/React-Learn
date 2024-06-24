import React, { useState } from "react";

function App() {

  const [drink , setDrink] = useState({
    title:"Amirican",
    price:5
  })

  const handleClick = () =>{
     setDrink({...drink , price:6})
  }
  return(
    <div>
     {drink.price}
     <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App;
