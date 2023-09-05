import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  test("renders welcome heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch(/where's waldo/i);
  });

  test("renders link to play route", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link.textContent).toMatch(/play/i);
  })
});
