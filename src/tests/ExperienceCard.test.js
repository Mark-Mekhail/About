import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceCard from "../components/ExperienceCard";

const experience = {
  role: "Software Engineer",
  company: "ABC Company",
  description: "Lorem ipsum dolor sit amet",
  logo: {
    src: "path/to/logo.png",
    alt: "Logo",
  },
  headingHeight: "100px",
  headingRef: jest.fn(),
};

describe("ExperienceCard Component", () => {
  test("renders the description", () => {
    render(<ExperienceCard {...experience} />);
    expect(screen.getByText(experience.description)).toBeInTheDocument();
  });

  test("renders the role and company name", () => {
    render(<ExperienceCard {...experience} />);
    expect(screen.getByText(experience.role)).toBeInTheDocument();
    expect(screen.getByText(experience.company)).toBeInTheDocument();
  });

  test("renders the logo", () => {
    const logoSrc = "path/to/logo.png";
    render(<ExperienceCard {...experience} />);
    const logoElement = screen.getByRole("img");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", logoSrc);
  });

  test("applies the heading height style", () => {
    render(<ExperienceCard {...experience} />);
    const headingElement = screen.getByTestId("experience card heading: ", { exact: false });
    expect(headingElement).toHaveStyle({ height: experience.headingHeight });
  });

  test("assigns the heading ref", () => {
    render(<ExperienceCard {...experience} />);
    expect(experience.headingRef).toHaveBeenCalled();
  });
});
