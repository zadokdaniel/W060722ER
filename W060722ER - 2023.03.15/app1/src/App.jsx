import logo from "./logo.svg";
import "./App.css";

import Hello from "./components/hello";
import ProductList from "./components/productsList";

function App() {
  return (
    <div className="App">
      <ProductList />

      {/* <Hello name="daniel" a="dskfjsd" color="red" />
      <Hello color="red" />
      <Hello />
      <Hello />
      <Hello /> */}
    </div>
  );
}

export default App;
