import { useState } from "react";

function CountryList() {
  let Countries = ["New York", "San Fransisco", "Egypt"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Lists</h1>
      {Countries.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {Countries.map((country, index) => (
          <li
            key={country}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {country}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CountryList;
