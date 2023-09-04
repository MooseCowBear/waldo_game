import { seconds, minutes, hours } from "../helpers/time_helpers";

describe("seconds", () => {
  test("returns only the seconds component of a time in seconds", () => {
    expect(seconds(100)).toBe(40);
  });

  test("returns input when input is less than 60", () => {
    expect(seconds(59)).toBe(59);
  });
});

describe("minutes", () => {
  test("returns minute portion of time in seconds", () => {
    expect(minutes(65)).toBe(1);
  });

  test("returns 0 if input less than 60", () => {
    expect(minutes(59)).toBe(0);
  })
});

describe("hours", () => {
  test("returns hour portion of time in seconds", () => {
    expect(hours(3600)).toBe(1);
  })

  test("returns 0 if input less than 3600", () => {
    expect(hours(3599)).toBe(0);
  })
})