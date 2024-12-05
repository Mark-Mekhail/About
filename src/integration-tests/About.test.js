import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import { abouts } from "../constants/content";

describe("About Component", () => {
  test("contains all about information", () => {
    render(<About />);

    abouts.forEach((about) => {
      const titleElement = screen.getByText(about.title);
      const iconElement = screen.getByAltText(about.icon.alt);
      const contentElement = screen.getByText(about.content);

      expect(titleElement).toBeInTheDocument();
      expect(iconElement).toBeInTheDocument();
      expect(contentElement).toBeInTheDocument();
    });
  });
});
