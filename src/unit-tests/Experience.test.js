import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "../components/Experience";
import { experiences } from "../constants/content";

const title = "My Experience";

describe("Experience Component", () => {
  test("renders all experiences", () => {
    render(<Experience title={title} />);

    experiences.forEach((experience) => {
      const experienceCardElement = screen.getByText(experience.company);
      expect(experienceCardElement).toBeInTheDocument();
    });
  });
});
