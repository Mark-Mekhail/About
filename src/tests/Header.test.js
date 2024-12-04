import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders the header with correct content", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    const iconElement = screen.getByAltText("mark portrait");
    const nameElement = screen.getByText("Mark Mekhail");

    expect(headerElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
