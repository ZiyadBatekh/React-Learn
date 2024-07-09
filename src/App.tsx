import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App() {

  const [cartItem , setCartItem]=useState(["Product 1" , "Product 2"]);

  return (
    <div>
     <NavBar cartItemsCount={cartItem.length}></NavBar>
     <Cart cartItems={cartItem} onClear={()=> setCartItem([])}></Cart>
    
    </div>
  );
}

export default App;
