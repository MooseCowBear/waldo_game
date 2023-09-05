import React from "react";
import { render, screen } from "@testing-library/react";
import PlayScreen from "../components/PlayScreen";

jest.mock("../components/Header", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="header" />;
  },
}));

jest.mock("../components/Gameboard", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="gameboard" />;
  },
}));

describe("PlayScreen", () => {
  test("it renders header and gameboard", () => {
    render(<PlayScreen />);

    expect(screen.queryByTestId("header")).not.toBeNull();
    expect(screen.queryByTestId("gameboard")).not.toBeNull();
  });
});
