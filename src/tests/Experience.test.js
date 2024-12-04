import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "../components/Experience";
import { experiences } from "../constants/content";

jest.mock("../components/ExperienceCard", () => ({ company }) => (
  <div>{company}</div>
));

const title = "My Experience";

describe("Experience Component", () => {
  test("renders the title correctly", () => {
    render(<Experience title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("renders all experience cards", () => {
    render(<Experience title={title} />);

    experiences.forEach((experience) => {
      const experienceCardElement = screen.getByText(experience.company);
      expect(experienceCardElement).toBeInTheDocument();
    });
  });
});
