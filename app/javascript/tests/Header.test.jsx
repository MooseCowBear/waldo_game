import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  jest.mock("../components/Timer", () => {
    return <div data-testid="timer"></div>;
  });

  const mockFunction = jest.fn();
  const mockScore = { 0: null };

  test("it displays the current level", () => {
    render(
      <MemoryRouter>
        <Header
          level={0}
          zoomLevel={0}
          setZoomLevel={mockFunction}
          time={0}
          setTime={mockFunction}
          running={false}
          setRunning={mockFunction}
          setHasQuit={mockFunction}
          score={mockScore}
        />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading").textContent;
    expect(heading).toMatch(/level 0/i);
  });

  test("it renders zoom in button", () => {
    render(
      <MemoryRouter>
        <Header
          level={0}
          zoomLevel={0}
          setZoomLevel={mockFunction}
          time={0}
          setTime={mockFunction}
          running={false}
          setRunning={mockFunction}
          setHasQuit={mockFunction}
          score={mockScore}
        />
      </MemoryRouter>
    );

    const zoomBtn = screen.queryByLabelText("zoom in");
    expect(zoomBtn).not.toBeNull();
  });

  test("it renders a zoom out button", () => {
    render(
      <MemoryRouter>
        <Header
          level={0}
          zoomLevel={0}
          setZoomLevel={mockFunction}
          time={0}
          setTime={mockFunction}
          running={false}
          setRunning={mockFunction}
          setHasQuit={mockFunction}
          score={mockScore}
        />
      </MemoryRouter>
    );

    const zoomBtn = screen.queryByLabelText("zoom out");
    expect(zoomBtn).not.toBeNull();
  });

  test("it renders a quit button", () => {
    render(
      <MemoryRouter>
        <Header
          level={0}
          zoomLevel={0}
          setZoomLevel={mockFunction}
          time={0}
          setTime={mockFunction}
          running={false}
          setRunning={mockFunction}
          setHasQuit={mockFunction}
          score={mockScore}
        />
      </MemoryRouter>
    );

    const quitBtn = screen.queryByText(/i'm done/i);
    expect(quitBtn).not.toBeNull();
  });
});
