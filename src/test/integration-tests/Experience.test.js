import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "../../components/Experience";
import { experiences } from "../../constants/content";

describe("Experience Component", () => {
  test("contains all experience information", () => {
    render(<Experience title="Experience" />);

    experiences.forEach((experience) => {
      const roleElement = screen.getByText(experience.role);
      const companyElement = screen.getByText(experience.company);
      const descriptionElement = screen.getByText(experience.description);
      const logoElement = screen.getByAltText(experience.logo.alt);

      expect(roleElement).toBeInTheDocument();
      expect(companyElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(logoElement).toBeInTheDocument();
    });
  });
});
