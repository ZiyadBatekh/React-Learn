import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Egypt"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Lists</h1>
      {items.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
