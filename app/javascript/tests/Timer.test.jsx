import React from "react";
import { render, screen } from "@testing-library/react";
import Timer from "../components/Timer";

describe("Timer", () => {
  test("it displays the time in hours, minutes, seconds", () => {
    const mockFunction = jest.fn();
    render(<Timer time={100} setTime={mockFunction} running={false} />);
    const hoursDisplay = screen.getByText(/0:/i);
    const minutesDisplay = screen.getByText(/01:/i);
    const secondsDisplay = screen.getByText(/40/i);

    expect(hoursDisplay).not.toBeNull();
    expect(minutesDisplay).not.toBeNull();
    expect(secondsDisplay).not.toBeNull();
  });
});
