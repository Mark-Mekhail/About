import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "../../components/Skills";
import { skillsets } from "../../constants/content";

describe("Skills Component", () => {
  test("contains all skill information", () => {
    render(<Skills />);

    skillsets.forEach((skillset) => {
      const categoryElement = screen.getByText(skillset.category);
      const skillNameElements = skillset.skills.map((skill) =>
        screen.getByText(skill.name)
      );
      const skillIconElements = skillset.skills.map((skill) =>
        screen.getByAltText(skill.icon.alt)
      );

      expect(categoryElement).toBeInTheDocument();
      skillNameElements.forEach((skillNameElement) =>
        expect(skillNameElement).toBeInTheDocument()
      );
      skillIconElements.forEach((skillIconElement) =>
        expect(skillIconElement).toBeInTheDocument()
      );
    });
  });
});
