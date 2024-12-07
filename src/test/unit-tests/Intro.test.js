import React from "react";
import { render, screen } from "@testing-library/react";
import Intro from "../../components/Intro";

describe("Intro Component", () => {
  test("renders the intro section with correct content", () => {
    render(<Intro />);

    const introElement = screen.getByRole("intro");
    const headingElement = screen.getByText("Mark Mekhail");
    const paragraphElement = screen.getByText((content) => {
      return (
        content.startsWith("Hey there!") &&
        content.endsWith("Thank you for visiting my website!")
      );
    });

    expect(introElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
