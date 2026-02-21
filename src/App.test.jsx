import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import App from "./App";

test("renders navbar and products heading", () => {
  render(
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  );

  // check navbar text instead of "Home" button text
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
});