import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../context/ProductContext.jsx";
import App from "../App.jsx";
import axios from "axios";
import { vi } from "vitest";

// Mock axios so tests do not call real server
vi.mock("axios");

test("renders navbar and products heading", async () => {
  // Mock the API response
  axios.get.mockResolvedValueOnce({
    data: [{ id: 1, name: "Apples", price: 3, quantity: 10 }],
  });

  render(
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });
});