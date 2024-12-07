import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../../components/About";
import { abouts } from "../../constants/content";

jest.mock("../../components/AboutCard", () => ({ title }) => <div>{title}</div>);

describe("About Component", () => {
  test("renders the title correctly", () => {
    render(<About />);

    const heading = screen.getByText("About Me");
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
