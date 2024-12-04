import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import { abouts } from "../constants/content";

jest.mock("motion/react", () => ({
  motion: {
    h1: ({ children }) => <h1>{children}</h1>,
    div: ({ children }) => <div>{children}</div>,
  },
}));

jest.mock("../components/AboutCard", () => ({ title }) => <div>{title}</div>);

describe("About Component", () => {
  test("renders About section with heading", () => {
    render(<About />);
    const heading = screen.getByText(/About Me/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders all about cards", () => {
    render(<About />);
    abouts.forEach((about) => {
      const aboutCard = screen.getByText(about.title);
      expect(aboutCard).toBeInTheDocument();
    });
  });
});
