import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./components/User";
import ProductLayout, { Laptop, Phone } from "./components/ProductLayout";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import SearchPage from "./components/SearchPage";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NotFound = () => <h2>Not Found 404</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/user/1">User 1</Link> | <Link to="/products">Products</Link>{" "}
        | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/search">search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userid" element={<User />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route element={<ProtectedRoute isAuthenticated={false} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route path="laptop" element={<Laptop />} />
            <Route path="phone" element={<Phone />} />
          </Route>
        </Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;