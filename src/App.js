import "./styles/App.css";
import TodoBody from "./comps/TodoBody/TodoBody";
import { ListContextProvider } from "./contexts/ListContext";
import CardComponent from "./comps/TodoHeader/TodoHeader";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <CardComponent />
        <TodoBody />
      </ListContextProvider>
    </div>
  );
}

export default App;
