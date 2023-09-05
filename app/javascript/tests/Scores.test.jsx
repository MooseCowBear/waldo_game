import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Scores from "../components/Scores";
import { useScores } from "../helpers/scores_fetcher";

jest.mock("../components/ScoresByLevel", () => ({
  __esModule: true,
  default: () => {
    return <div>Level Scores</div>;
  },
}));

jest.mock("../helpers/scores_fetcher", () => ({
  useScores: jest.fn(),
}));

describe("Scores", () => {
  test("renders 3 scores by levels when scores is not empty", async () => {
    useScores.mockReturnValueOnce({
      scores: [
        { name: "alice", time: 10, level: 1 },
        { name: "bob", time: 5, level: 2 },
      ],
      error: null,
      loading: false,
    });
    render(
      <MemoryRouter>
        <Scores />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.queryAllByText("Level Scores").length).toBe(3);
    });
  });

  test("renders 0 scores by levels when scores is undefined", async () => {
    useScores.mockReturnValueOnce({
      scores: undefined,
      error: null,
      loading: false,
    });
    render(
      <MemoryRouter>
        <Scores />
      </MemoryRouter>
    );
    //check this!!!
    await waitFor(() => {
      expect(useScores).toHaveBeenCalled();
    });
    expect(screen.queryAllByText("Level Scores").length).toBe(0);
  });

  test("renders error message when error", async () => {
    useScores.mockReturnValueOnce({
      scores: undefined,
      error: new Error("Network response was not ok."),
      loading: false,
    });
    render(
      <MemoryRouter>
        <Scores />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Something went wrong.")).not.toBeNull();
    });
  });

  test("renders loading when loading", async () => {
    useScores.mockReturnValueOnce({
      scores: undefined,
      error: null,
      loading: true,
    });
    render(
      <MemoryRouter>
        <Scores />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("getting scores...")).not.toBeNull();
    });
  });
});
