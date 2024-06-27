import React, { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "New York",
      zipCode: 12345,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 2222222222222222 },
    });
  };
  return (
    <div>
      {customer.address.zipCode}
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
