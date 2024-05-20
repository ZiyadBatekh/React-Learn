import Like from "./components/Like/Like";
import React from "react";

function App() {
  return(
    <div>
      <Like onClick={()=>console.log("Clicked")}></Like>
    </div>
  )
}

export default App;
