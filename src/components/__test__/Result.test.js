import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "../Result";

describe("Testing Result component", () => {
  it("Test heading text is present or not", () => {
    render(<Result />);
    const header = screen.queryByRole("heading");
    expect(header).toHaveTextContent("Your Math Calculator");
  });
  it("Testing 45, 9 and * visible or not", () => {
    render(<Result total={45} next={8} operation="*" />);
    const container = screen.queryByTestId("result");
    expect(container).toHaveTextContent("45*8");
  });

  it("Testing 45, 8 and - visible or not", () => {
    render(<Result total={45} next={8} operation="-" />);
    const container = screen.queryByTestId("result");
    expect(container).toHaveTextContent("45-8");
  });
    
     it("Testing 5, 8 and - visible or not", () => {
       render(<Result total={5} next={8} operation="-" />);
       const container = screen.queryByTestId("result");
       expect(container).toHaveTextContent("5-8");
     });
});
