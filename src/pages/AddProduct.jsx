import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext.jsx";
import toast from "react-hot-toast";

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) {
      toast.error("All fields are required!");
      return;
    }

    addProduct({ name, price: parseFloat(price), quantity: parseInt(quantity) });
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price ($):</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}