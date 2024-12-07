import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import Header from "../../components/Header";

jest.mock("../../utils/Window", () => {
  const originalModule = jest.requireActual("../../utils/Window");
  return {
    ...originalModule,
    remToPx: jest.fn((rem) => rem),
  };
});

window.scrollTo = jest.fn();

const mockNavSectionRefs = {
  Photos: {
    current: {
      offsetTop: 100,
    },
  },
  About: {
    current: {
      offsetTop: 200,
    },
  },
  Experience: {
    current: {
      offsetTop: 300,
    },
  },
  Skills: {
    current: {
      offsetTop: 400,
    },
  },
  Projects: {
    current: {
      offsetTop: 500,
    },
  },
};

describe("Header Component", () => {
  test("renders the header with correct content", () => {
    render(<Header navSectionRefs={mockNavSectionRefs} />);

    const headerElement = screen.getByRole("banner");
    const iconElement = screen.getByAltText("mark portrait");
    const nameElement = screen.getByText("Mark Mekhail");

    expect(headerElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });

  test("renders the navigation items on wide screens", () => {
    window.innerWidth = 1024;

    render(<Header navSectionRefs={mockNavSectionRefs} />);

    const navItems = screen.getAllByRole("nav-item");
    const menuIcon = screen.queryByAltText("menu icon");

    expect(navItems).toHaveLength(Object.keys(mockNavSectionRefs).length);
    expect(menuIcon).not.toBeInTheDocument();
  });

  test("renders the menu button on narrow screens", () => {
    window.innerWidth = 50;

    render(<Header navSectionRefs={mockNavSectionRefs} />);

    const navItems = screen.queryAllByRole("nav-item");
    const menuIcon = screen.getByAltText("menu icon");

    expect(navItems).toHaveLength(0);
    expect(menuIcon).toBeInTheDocument();
  });

  test("toggles the menu when the menu icon is clicked", () => {
    window.innerWidth = 50;

    render(<Header navSectionRefs={mockNavSectionRefs} />);

    const menuIcon = screen.getByAltText("menu icon");
    const navItems = screen.queryAllByRole("nav-item");

    expect(navItems).toHaveLength(0);

    act(() => {
      menuIcon.click();
    });

    const toggledNavItems = screen.getAllByRole("nav-item");
    expect(toggledNavItems).toHaveLength(Object.keys(mockNavSectionRefs).length);
  });

  test("collapses the menu when a navigation item is clicked", () => {
    window.innerWidth = 50;

    render(<Header navSectionRefs={mockNavSectionRefs} />);

    const menuIcon = screen.getByAltText("menu icon");
    const navItems = screen.queryAllByRole("nav-item");

    expect(navItems).toHaveLength(0);

    act(() => {
      menuIcon.click();
    });

    const toggledNavItems = screen.getAllByRole("nav-item");
    expect(toggledNavItems).toHaveLength(Object.keys(mockNavSectionRefs).length);

    act(() => {
      toggledNavItems[0].click();
    });

    waitFor(() => {
      const collapsedNavItems = screen.queryAllByRole("nav-item");
      expect(collapsedNavItems).toHaveLength(0);
    });
  });
});
