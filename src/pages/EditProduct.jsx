import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext.jsx";
import api from "../axios.js";
import toast from "react-hot-toast";

export default function EditProduct() {
  const { id } = useParams();
  const { updateProduct } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, { name: product.name, price: parseFloat(product.price), quantity: parseInt(product.quantity) });
    toast.success("Product updated successfully!");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        </div>
        <div>
          <label>Price ($):</label>
          <input type="number" step="0.01" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}