import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Gameboard from "../components/Gameboard";

jest.mock("../components/Form", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="mock-form" />;
  },
}));

describe("Gameboard", () => {
  test("if click image in wrong position, bounding box and wrong choice svg are displayed", async () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <Gameboard
        level={0}
        setLevel={mockFunction}
        zoomLevel={0}
        setZoomLevel={mockFunction}
        running={true}
        setRunning={mockFunction}
        time={0}
        setTime={mockFunction}
        score={mockScore}
        setScore={mockFunction}
        hasQuit={false}
      />
    );

    const gameImg = screen.getByAltText("game image");
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

    // not sure why 0, 0 was registering as a winning click...
    Object.defineProperty(event, "offsetX", { value: 100 });
    Object.defineProperty(event, "offsetY", { value: 100 });
    fireEvent(gameImg, event);

    const box = screen.getByLabelText("bounding box");
    const error = screen.getByLabelText("wrong choice marker");
    expect(box).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  test("if not boundingBoxActive, bounding box div is not displayed", () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <Gameboard
        level={0}
        setLevel={mockFunction}
        zoomLevel={0}
        setZoomLevel={mockFunction}
        running={true}
        setRunning={mockFunction}
        time={0}
        setTime={mockFunction}
        score={mockScore}
        setScore={mockFunction}
        hasQuit={false}
      />
    );

    const box = screen.queryByLabelText("bounding box");
    expect(box).toBeNull();
  });

  test("if not errorActive, then wrong choice indication is not displayed", () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <Gameboard
        level={0}
        setLevel={mockFunction}
        zoomLevel={0}
        setZoomLevel={mockFunction}
        running={true}
        setRunning={mockFunction}
        time={0}
        setTime={mockFunction}
        score={mockScore}
        setScore={mockFunction}
        hasQuit={false}
      />
    );

    const error = screen.queryByLabelText("wrong choice marker");
    expect(error).toBeNull();
  });

  test("if not running and not has quit, button to move to next level is displayed", () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <Gameboard
        level={0}
        setLevel={mockFunction}
        zoomLevel={0}
        setZoomLevel={mockFunction}
        running={false}
        setRunning={mockFunction}
        time={0}
        setTime={mockFunction}
        score={mockScore}
        setScore={mockFunction}
        hasQuit={false}
      />
    );

    const nextLevel = screen.queryByText(/next level/i);
    expect(nextLevel).not.toBeNull();
  });

  test("if running, button to move to next level is not displayed", () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <Gameboard
        level={0}
        setLevel={mockFunction}
        zoomLevel={0}
        setZoomLevel={mockFunction}
        running={true}
        setRunning={mockFunction}
        time={0}
        setTime={mockFunction}
        score={mockScore}
        setScore={mockFunction}
        hasQuit={false}
      />
    );

    const nextLevel = screen.queryByText(/next level/i);
    expect(nextLevel).toBeNull();
  });

  test("if has quit, button to move to next level is not displayed", () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <MemoryRouter>
        <Gameboard
          level={0}
          setLevel={mockFunction}
          zoomLevel={0}
          setZoomLevel={mockFunction}
          running={false}
          setRunning={mockFunction}
          time={0}
          setTime={mockFunction}
          score={mockScore}
          setScore={mockFunction}
          hasQuit={true}
        />
      </MemoryRouter>
    );

    const nextLevel = screen.queryByText(/next level/i);
    expect(nextLevel).toBeNull();
  });

  test("if has quit, displays form", () => {
    const mockFunction = jest.fn();
    const mockScore = { 0: null };
    render(
      <MemoryRouter>
        <Gameboard
          level={0}
          setLevel={mockFunction}
          zoomLevel={0}
          setZoomLevel={mockFunction}
          running={false}
          setRunning={mockFunction}
          time={0}
          setTime={mockFunction}
          score={mockScore}
          setScore={mockFunction}
          hasQuit={true}
        />
      </MemoryRouter>
    );

    const form = screen.queryByTestId("mock-form");
    expect(form).not.toBeNull();
  });
});
