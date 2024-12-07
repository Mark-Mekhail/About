import React from "react";
import { render, screen } from "@testing-library/react";
import SkillsetBanner from "../../components/SkillsetBanner";

const category = "Category 1";
const skills = [
  {
    name: "Skill 1",
    icon: {
      src: "icon1.png",
      alt: "Icon 1",
    },
  },
  {
    name: "Skill 2",
    icon: {
      src: "icon2.png",
      alt: "Icon 2",
    },
  },
];

describe("SkillsetBanner Component", () => {
  test("renders the title correctly", () => {
    render(<SkillsetBanner category={category} skills={skills} />);

    const titleElement = screen.getByRole("heading", { name: category });
    expect(titleElement).toBeInTheDocument();
  });

  test("renders all skills", () => {
    render(<SkillsetBanner category={category} skills={skills} />);

    skills.forEach((skill) => {
      const skillElement = screen.getByRole("heading", { name: skill.name });
      expect(skillElement).toBeInTheDocument();
    });
  });
});
