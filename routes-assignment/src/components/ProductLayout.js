import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <h2>ProductLayout</h2>
      <nav>
        <Link to="laptop">Laptop</Link> | <Link to="phone">Phone</Link>
      </nav>
      <Outlet />
    </>
  );
};

export const Laptop = () => <h2>Laptop</h2>;
export const Phone = () => <h2>Phone</h2>;

export default ProductLayout;
