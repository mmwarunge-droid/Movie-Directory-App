import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("🎬 Movie Directory App - Vitest Suite", () => {

  it("renders the app without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /welcome to the movie directory/i })
    ).toBeInTheDocument();
  }); // ✅ properly closed


  it("handles invalid movie ID gracefully", () => {
    render(
      <MemoryRouter initialEntries={["/movies/999"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/not found|movie not found/i)
    ).toBeInTheDocument();
  });

});