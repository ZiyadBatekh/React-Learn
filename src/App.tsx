import List from "./List";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Egypt"];
  return (
    <div>
      <List items={items} heading="Countries" />
    </div>
  );
}

export default App;
