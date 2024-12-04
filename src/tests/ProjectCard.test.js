import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

const project = {
  link: "https://example.com",
  image: {
    src: "path/to/image.png",
    alt: "Image",
  },
  title: "Project Title",
  description: "Lorem ipsum dolor sit amet",
  tags: ["tag1", "tag2", "tag3"],
  overlayHeight: "200px",
  overlayRef: jest.fn(),
};

describe("ProjectCard Component", () => {
  test("renders all project information", () => {
    render(<ProjectCard {...project} />);

    const linkElement = screen.getByRole("link");
    const imageElement = screen.getByRole("img");
    const titleElement = screen.getByText(project.title);
    const descriptionElement = screen.getByText(project.description);
    const tagsElements = project.tags.map((tag) => screen.getByText(tag));

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", project.link);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", project.image.src);
    expect(imageElement).toHaveAttribute("alt", project.image.alt);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    tagsElements.forEach((tagElement) =>
      expect(tagElement).toBeInTheDocument()
    );
  });

  test("applies overlay props", () => {
    render(<ProjectCard {...project} />);

    const overlayElement = screen.getByRole("project-card-overlay");

    expect(overlayElement).toHaveStyle({ height: project.overlayHeight });
    expect(project.overlayRef).toHaveBeenCalled();
  });
});
