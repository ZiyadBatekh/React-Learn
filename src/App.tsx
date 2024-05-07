import List from "./List";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Egypt"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <List items={items} heading="Countries" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
