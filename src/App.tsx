import React, { useState } from "react";

function App() {
 const [bugs, setBugs] = useState([
     {id:1 , title:'Bug 1' , fixed:false},
     {id:2 , title:'Bug 2' , fixed:false},
 ])

  const handleClick = () => {
  setBugs(bugs.map(bug => bug.id === 1 ? {...bug , fixed:true}: bug))
  // So to update array of objects we use the map operator.
     
  };
  return (
    <div>
     
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
