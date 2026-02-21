import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import Swal from "sweetalert2";

export default function Home() {
  const { products, deleteProduct } = useContext(ProductContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteProduct(id);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} - Qty: {p.quantity}{" "}
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}