import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <Link to="/">Home</Link> | <Link to="/add">Add Product</Link> | <Link to="/cart">Cart</Link>
    </nav>
  );
}