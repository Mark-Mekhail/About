import React from "react";
import { render, screen } from "@testing-library/react";
import AboutCard from "../components/AboutCard";

const about = {
  title: "Test Title",
  icon: { src: "path/to/test/icon.png", alt: "Test icon" },
  content: "Test Content",
};

describe("AboutCard Component", () => {
  test("renders title, icon, and content", () => {
    render(<AboutCard {...about} />);

    const titleElement = screen.getByText(about.title);
    const iconElement = screen.getByAltText(about.icon.alt);
    const contentElement = screen.getByText(about.content);

    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
