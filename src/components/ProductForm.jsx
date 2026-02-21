import { useState } from "react";

export default function ProductForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [quantity, setQuantity] = useState(initialData.quantity || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
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
      <button type="submit">Submit</button>
    </form>
  );
}