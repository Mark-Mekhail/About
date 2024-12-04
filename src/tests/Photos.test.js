import React from "react";
import { render, screen } from "@testing-library/react";
import Photos from "../components/Photos";

describe("Photos Component", () => {
  test("renders the photos section with correct images", () => {
    render(<Photos />);

    const sectionElement = screen.getByRole("photos-section");
    const topPortraitElement = screen.getByAltText("Mark in Banff");
    const landscapeElement = screen.getByAltText("Mark on the Beehive Hike");
    const bottomPortraitElement = screen.getByAltText("Mark in Seattle");

    expect(sectionElement).toBeInTheDocument();
    expect(topPortraitElement).toBeInTheDocument();
    expect(landscapeElement).toBeInTheDocument();
    expect(bottomPortraitElement).toBeInTheDocument();
  });
});
