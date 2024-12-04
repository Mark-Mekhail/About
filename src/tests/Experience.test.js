import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "../components/Experience";

const experiences = [
  { role: "Role A", company: "Company A", description: "Description A", logo: { src: "path/to/logoA.png", alt: "Logo A" } },
  { role: "Role B", company: "Company B", description: "Description B", logo: { src: "path/to/logoB.png", alt: "Logo B" } },
];
jest.mock("../constants/content", () => ({
  experiences: experiences,
}));

describe("Experience Component", () => {
  test("renders the title correctly", () => {
    const title = "My Experience";
    render(<Experience title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("renders the correct number of experience cards", () => {
    render(<Experience title="My Experience" />);
    const experienceCards = screen.getAllByTestId("experience card div: ", { exact: false });
    expect(experienceCards.length).toBe(experiences.length);
  });
});
