import {
  getTotalScoreAndLastLevel,
  displayName,
  hasCompletedLevel,
} from "../helpers/score_helpers";

describe("displayName", () => {
  test("returns 'Anonymous' if name is empty string", () => {
    expect(displayName("")).toBe("Anonymous");
  });

  test("returns 'Anonymous' if name contains only spaces", () => {
    expect(displayName("   ")).toBe("Anonymous");
  });

  test("returns input string with leading, trailing whitespace stripped", () => {
    expect(displayName("  harry  ")).toBe("harry");
  });
});

describe("hasCompletedLevel", () => {
  test("returns false if every level has a score of null", () => {
    const scores = { 0: null, 1: null };
    expect(hasCompletedLevel(scores)).toBeFalsy();
  });

  test("returns true if one level has a non null score", () => {
    const scores = { 0: 1, 1: null };
    expect(hasCompletedLevel(scores)).toBeTruthy();
  });

  test("returns true if all levels have non null scores", () => {
    const scores = { 0: 1, 1: 1 };
    expect(hasCompletedLevel(scores)).toBeTruthy();
  });
});

describe("getTotalScoreAndLastLevel", () => {
  test("it sums the non null values of score", () => {
    const score = {0: 1, 1: 2, 2: null};
    expect(getTotalScoreAndLastLevel(score).time).toBe(3);
  });

  test("it returns the highest level with a non null score", () => {
    const score = { 0: 1, 1: 2, 2: null };
    expect(getTotalScoreAndLastLevel(score).level).toBe(1);
  });

  test("it returns -1 as last level completed if no non null scores", () => {
    const score = { 0: null, 1: null};
    expect(getTotalScoreAndLastLevel(score).level).toBe(-1);
  });
});