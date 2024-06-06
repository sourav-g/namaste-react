import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    //* Render -> Query -> Assert

    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes); //React Elements

    expect(inputBoxes.length).toBe(2);

    /*  For multiple assertions, test fails on the first failed assertion.
        Subsequent assertions are NOT evaluated at all.
        
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();

    */
  });
});
