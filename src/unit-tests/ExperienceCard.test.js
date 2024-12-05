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
  test("renders all experience information", () => {
    render(<ExperienceCard {...experience} />);

    const roleElement = screen.getByText(experience.role);
    const companyElement = screen.getByText(experience.company);
    const descriptionElement = screen.getByText(experience.description);
    const logoElement = screen.getByRole("img");

    expect(roleElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", experience.logo.src);
    expect(logoElement).toHaveAttribute("alt", experience.logo.alt);
  });

  test("applies heading props", () => {
    render(<ExperienceCard {...experience} />);

    const headingElement = screen.getByRole("experience-card-heading");

    expect(headingElement).toHaveStyle({ height: experience.headingHeight });
    expect(experience.headingRef).toHaveBeenCalled();
  });
});
