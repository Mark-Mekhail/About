import React from "react";
import { render, screen } from "@testing-library/react";
import AboutCard from "../components/AboutCard";

describe("AboutCard Component", () => {
  test("renders title, icon, and content", () => {
    const title = "Test Title";
    const icon = { src: "path/to/test/icon.png", alt: "Test icon" };
    const content = "Test Content";

    render(<AboutCard title={title} icon={icon} content={content} />);

    const titleElement = screen.getByText(title);
    const iconElement = screen.getByAltText(icon.alt);
    const contentElement = screen.getByText(content);

    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
