import React from "react";
import { render, screen } from "@testing-library/react";
import Photos from "../../components/Photos";

describe("Photos Component", () => {
  test("renders the photos section with correct images", () => {
    render(<Photos />);

    const sectionElement = screen.getByRole("photos");
    const topPortraitElement = screen.getByAltText("top portrait of Mark");
    const landscapeElement = screen.getByAltText("landscape of Mark");
    const bottomPortraitElement = screen.getByAltText("bottom portrait of Mark");

    expect(sectionElement).toBeInTheDocument();
    expect(topPortraitElement).toBeInTheDocument();
    expect(landscapeElement).toBeInTheDocument();
    expect(bottomPortraitElement).toBeInTheDocument();
  });
});
