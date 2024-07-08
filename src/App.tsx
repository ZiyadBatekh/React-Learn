import React, { useState } from "react";
import produce from 'immer';

function App() {
 const [bugs, setBugs] = useState([
     {id:1 , title:'Bug 1' , fixed:false},
     {id:2 , title:'Bug 2' , fixed:false},
 ])

  const handleClick = () => {
  // setBugs(bugs.map(bug => bug.id === 1 ? {...bug , fixed:true}: bug))
  
  // So to update array of objects we use the map operator.

  // Updating a property in the array of object using immer

  setBugs(produce(draft =>{
    // What is "draft" Parameter ?
    //Ans : draft is a proxy object that records the changes we will apply to bugs array of objects, imagine it is a copy of the bugs array of objects.
   const bug=  draft.find(bug => bug.id === 1)
   if(bug)  bug.fixed =true
  }))
  
     
  };
  return (
    <div>
     {bugs.map(bug => <p key={bug.id} >{bug.title} {bug.fixed ? "Fixed" : "New"}</p>)}
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
