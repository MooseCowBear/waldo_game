import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";
import { MemoryRouter } from "react-router-dom";

describe("Form", () => {
  const testScore = { 0: 1, 1: 2, 2: null, 3: null };
  test("renders a text input for name", () => {
    render(
      <MemoryRouter>
        <Form score={testScore} />
      </MemoryRouter>
    );

    const nameInput = screen.queryByLabelText("Name:");
    expect(nameInput).not.toBeNull();
  });

  test("renders button to bypass recording score", () => {
    render(
      <MemoryRouter>
        <Form score={testScore} />
      </MemoryRouter>
    );

    const button = screen.queryByRole("button", {
      name: "Or start over without recording your score.",
    });
    expect(button).not.toBeNull();
  });

  test("displays user input", () => {
    render(
      <MemoryRouter>
        <Form score={testScore} />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("Name:");
    fireEvent.change(input, { target: { value: "123" } });
    expect(screen.queryByDisplayValue("123")).not.toBeNull();
  })
});
