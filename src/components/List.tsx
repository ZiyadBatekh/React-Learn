import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function CountryList({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {items.map((country, index) => (
          <li
            key={country}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(country);
            }}
          >
            {country}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CountryList;
