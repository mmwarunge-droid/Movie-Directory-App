import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../axios.js";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Server not running:", error);
        toast.error("Backend not running on port 5000");
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const res = await api.post("/products", product);
      setProducts((prev) => [...prev, res.data]);
      toast.success("Product added!");
    } catch {
      toast.error("Failed to add product");
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const res = await api.put(`/products/${id}`, updatedProduct);
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? res.data : p))
      );
      toast.success("Product updated!");
    } catch {
      toast.error("Failed to update product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product deleted!");
    } catch {
      toast.error("Failed to delete product");
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}