import React from "react";
import { render, screen } from "@testing-library/react";

import Body from "../components/Body";

jest.mock("../components/Intro", () => () => <div>Intro Component</div>);
jest.mock("../components/Photos", () => () => <div>Photos Component</div>);
jest.mock("../components/About", () => () => <div>About Component</div>);
jest.mock("../components/Experience", () => () => (
  <div>Experience Component</div>
));
jest.mock("../components/Skills", () => () => <div>Skills Component</div>);
jest.mock("../components/Projects", () => () => <div>Projects Component</div>);

describe("Body Component", () => {
  test("renders all child components", () => {
    render(<Body />);
    expect(screen.getByText("Intro Component")).toBeInTheDocument();
    expect(screen.getByText("Photos Component")).toBeInTheDocument();
    expect(screen.getByText("About Component")).toBeInTheDocument();
    expect(screen.getByText("Experience Component")).toBeInTheDocument();
    expect(screen.getByText("Skills Component")).toBeInTheDocument();
    expect(screen.getByText("Projects Component")).toBeInTheDocument();
  });
});
