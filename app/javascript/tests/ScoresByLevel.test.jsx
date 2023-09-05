import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScoresByLevel from "../components/ScoresByLevel";

describe("Scores by level", () => {
  const testScores = [
    { level: 0, time: 1, name: "alice" },
    { level: 1, time: 1, name: "bob" },
    { level: 1, time: 2, name: "charlie" },
    { level: 1, time: 3, name: "darrel" },
    { level: 1, time: 4, name: "evie" },
    { level: 1, time: 5, name: "frank" },
    { level: 1, time: 6, name: "george" },
  ];
  test("displays only scores from the specified level", () => {
    render(
      <ScoresByLevel
        scores={testScores}
        lastLevelCompleted={0}
        initiallyOpen={true}
      />
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(1);
    expect(screen.queryByText("alice")).not.toBeNull();
  });

  test("renders a see more button when scores displayed is less than number of scores", () => {
    render(
      <ScoresByLevel
        scores={testScores}
        lastLevelCompleted={1}
        initiallyOpen={true}
      />
    );

    const seeMoreBtn = screen.queryByRole("button", { name: "see more" });
    expect(seeMoreBtn).not.toBeNull();
  });

  test("does not render see more button when scores displayed equals number of scores", () => {
    render(
      <ScoresByLevel
        scores={testScores}
        lastLevelCompleted={0}
        initiallyOpen={true}
      />
    );

    const seeMoreBtn = screen.queryByRole("button", { name: "see more" });
    expect(seeMoreBtn).toBeNull();
  });

  test("defaults to displaying five scores if more than 5 scores", () => {
    render(
      <ScoresByLevel
        scores={testScores}
        lastLevelCompleted={1}
        initiallyOpen={true}
      />
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(5);
  });

  test("button click hides scores for level if scores were visible", async () => {
    const user = userEvent.setup();

    render(
      <ScoresByLevel
        scores={testScores}
        lastLevelCompleted={1}
        initiallyOpen={true}
      />
    );

    const toggleBtn = screen.getByLabelText("toggle display scores");
    await user.click(toggleBtn);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });

  test("button click displays scores for level if scores were not visible", async () => {
    const user = userEvent.setup();

    render(
      <ScoresByLevel
        scores={testScores}
        lastLevelCompleted={1}
        initiallyOpen={false}
      />
    );

    const toggleBtn = screen.getByLabelText("toggle display scores");
    await user.click(toggleBtn);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(5);
  });
});
