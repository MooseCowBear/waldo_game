import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Scores from "../components/Scores";

jest.mock("../components/ScoresByLevel", () => ({
  __esModule: true,
  default: () => {
    return <div>Level Scores</div>;
  },
}));

jest.mock("../helpers/scores_fetcher", () => ({
  useScores: jest.fn().mockReturnValue({
    scores: [
      { name: "alice", time: 10, level: 1 },
      { name: "bob", time: 5, level: 2 },
    ],
    error: null,
    loading: false,
  }),
}));

describe("Scores", () => {
  test("renders 3 scores by levels", async () => {
    render(
      <MemoryRouter>
        <Scores />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.queryAllByText("Level Scores").length).toBe(3);
    });
  });
});
