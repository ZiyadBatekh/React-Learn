import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="warning" onClick={() => console.log("Clicked")}>
        Mona Elmoghazi
      </Button>
    </div>
  );
}

export default App;
