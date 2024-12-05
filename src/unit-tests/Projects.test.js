import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import { projects } from "../constants/content";

jest.mock("../components/ProjectCard", () => ({ title }) => <div>{title}</div>);

describe("Projects Component", () => {
  test("renders the title correctly", () => {
    render(<Projects />);

    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  test("renders all project cards", () => {
    render(<Projects />);

    projects.forEach((project) => {
      const projectCardElement = screen.getByText(project.title);
      expect(projectCardElement).toBeInTheDocument();
    });
  });
});
