export default function ProductList({ products, onDelete, onAddToCart }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - ${p.price} - Qty: {p.quantity}{" "}
          {onAddToCart && <button onClick={() => onAddToCart(p)}>Add to Cart</button>}
          {onDelete && <button onClick={() => onDelete(p.id)}>Delete</button>}
        </li>
      ))}
    </ul>
  );
}