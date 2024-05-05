import React from "react";
import { MouseEvent } from "react";

function CountryList() {
  let Countries = ["New York", "San Fransisco", "Egypt"];
  let handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>Lists</h1>
      {Countries.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {Countries.map((country) => (
          <li key={country} className="list-group-item" onClick={handleClick}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CountryList;
