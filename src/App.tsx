import React, { useState } from "react";

function App() {
 const [tags, setTags] = useState(["Happy, Sad"])

  const handleClick = () => {
    // Add item
     setTags([...tags , "Exciting"]);
     
    // Removing Item
    setTags(tags.filter(tag => tag !== "happy"))

    // update an existing element
    setTags(tags.map(tag => tag="happy" ? "Happines" : tag));
     
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
