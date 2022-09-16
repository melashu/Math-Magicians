import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "../Calculator";

describe("Testing Calculator component", () => {
  it("Test heading text is present or not", () => {
    render(<Calculator />);
    const header = screen.queryByTestId("title");
    expect(header).toHaveTextContent("Lets do some Maths together!");
  });
});
