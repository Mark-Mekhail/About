import React from "react";
import { render, screen } from "@testing-library/react";

import Body from "../../components/Body";

jest.mock("../../components/Intro", () => () => <div>Intro</div>);
jest.mock("../../components/Photos", () => () => <div>Photos</div>);
jest.mock("../../components/About", () => () => <div>About</div>);
jest.mock("../../components/Experience", () => () => <div>Experience</div>);
jest.mock("../../components/Skills", () => () => <div>Skills</div>);
jest.mock("../../components/Projects", () => () => <div>Projects</div>);

const mockNavSectionRefs = {
  Photos: {},
  About: {},
};

describe("Body Component", () => {
  test("renders all child components", () => {
    render(<Body navSectionRefs={mockNavSectionRefs} />);

    const componentNames = [
      "Intro",
      "Photos",
      "About",
      "Experience",
      "Skills",
      "Projects",
    ];

    componentNames.forEach((componentName) => {
      const componentElement = screen.getByText(componentName, {
        exact: false,
      });
      expect(componentElement).toBeInTheDocument();
    });
  });
});
