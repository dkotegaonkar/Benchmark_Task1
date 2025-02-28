import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Menu from "./component/Menu";
import Products from "./component/Products";
import Category from "./component/Category";
import ShowProduct from "./component/ShowProduct";
import Cart from "./component/Cart";



function App() {
  return (
    
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element = {<><Products/></>} />
          <Route path="/:category" element={<Category/>} />
          <Route path="/showProduct/:id" element = {<><ShowProduct/></>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
