import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

jest.mock("../../utils/Window", () => {
  const originalModule = jest.requireActual("../../utils/Window");
  return {
    ...originalModule,
    remToPx: jest.fn((rem) => rem),
  };
});

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

  test("renders the navigation items on wide screens", () => {
    window.innerWidth = 1024;

    render(<Header />);

    const navItems = screen.getAllByRole("nav-item");
    const menuIcon = screen.queryByAltText("menu icon");

    expect(navItems).toHaveLength(4);
    expect(menuIcon).not.toBeInTheDocument();
  });

  test("renders the menu button on narrow screens", () => {
    window.innerWidth = 50;

    render(<Header />);

    const navItems = screen.queryAllByRole("nav-item");
    const menuIcon = screen.getByAltText("menu icon");

    expect(navItems).toHaveLength(0);
    expect(menuIcon).toBeInTheDocument();
  });
});
