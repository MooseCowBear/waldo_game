import { found, levelFinished } from "../helpers/game_helpers";

describe("found", () => {
  test("returns true if click occurs inside box", () => {
    expect(found(20, 50, 50, 100, 100, 0.5, 0.5)).toBeTruthy();
  });

  test("returns true if click occurs on box edge", () => {
    expect(found(20, 40, 40, 100, 100, 0.5, 0.5)).toBeTruthy();
  });

  test("returns false if click occurs outside box", () => {
    expect(found(20, 10, 10, 100, 100, 0.5, 0.5)).toBeFalsy();
  });
});

describe("levelFinished", () => {
  test("calls setRunning but not setScore when completed is false", () => {
    const mockCallback = jest.fn();
    levelFinished(
      0,
      10,
      mockCallback,
      {},
      mockCallback,
      false
    );

    expect(mockCallback.mock.calls).toHaveLength(1);
  });

  test("calls setRunning and setScore when completed is true", () => {
    const mockCallback = jest.fn();
    levelFinished(
      0,
      10,
      mockCallback,
      {},
      mockCallback,
      true
    );

    expect(mockCallback.mock.calls).toHaveLength(2);
  });
});
