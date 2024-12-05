import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import { projects } from "../constants/content";

describe("Projects Component", () => {
  test("contains all project information", () => {
    render(<Projects />);

    projects.forEach((project) => {
      const titleElement = screen.getByText(project.title);
      const descriptionElement = screen.getByText(project.description);
      const linkElement = screen.getByRole("link", {
        name: (name) => name.includes(project.title),
      });
      const imageElement = screen.getByAltText(project.image.alt);
      const tagElements = project.tags.map((tag) => screen.getAllByText(tag));

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(linkElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      tagElements.forEach((tagElement) =>
        expect(tagElement[0]).toBeInTheDocument()
      );
    });
  });
});
