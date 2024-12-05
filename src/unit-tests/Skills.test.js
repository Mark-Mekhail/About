import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";
import { skillsets } from "../constants/content";

jest.mock("../components/SkillsetBanner", () => ({ category }) => (
  <div>{category}</div>
));

describe("Skills Component", () => {
  test("renders the title correctly", () => {
    render(<Skills />);

    const headingElement = screen.getByText("Skills");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders all skillset banners", () => {
    render(<Skills />);

    skillsets.forEach((skillset) => {
      const skillsetBannerElement = screen.getByText(skillset.category);
      expect(skillsetBannerElement).toBeInTheDocument();
    });
  });
});
