import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import toast from "react-hot-toast";

export default function Cart() {
  const { products, updateProduct } = useContext(ProductContext);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product.quantity <= 0) {
      toast.error("Out of stock!");
      return;
    }

    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart((prev) => prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }

    updateProduct(product.id, { ...product, quantity: product.quantity - 1 });
    toast.success(`${product.name} added to cart`);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} - Qty: {p.quantity}{" "}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
          </li>
        ))}
      </ul>

      {cart.length > 0 && <h3>Total: ${total.toFixed(2)}</h3>}
    </div>
  );
}