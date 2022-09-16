import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../Table";

describe("Test Table component", () => {
  test("Test the total number of button is 19", () => {
    render(<Table />);
    const allButton = screen.queryAllByRole("button");
    expect(allButton).toHaveLength(19);
  });

  test("Test the total number of button is not 18", () => {
    render(<Table />);
    const allButton = screen.queryAllByRole("button");
    expect(allButton).not.toHaveLength(18);
  });
});
