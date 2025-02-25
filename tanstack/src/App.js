import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
        <Route path="/add" element={<AddProducts />} />
          <Route path="/" element={<Products />} />
          <Route path="/:category" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
