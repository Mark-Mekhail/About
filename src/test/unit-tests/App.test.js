import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

jest.mock("../../components/Header", () => () => <header>Header</header>);
jest.mock("../../components/Body", () => () => <section>Body</section>);
jest.mock("../../components/Footer", () => () => <footer>Footer</footer>);

describe("App Component", () => {
  test("renders all sections of the app", () => {
    render(<App />);

    const sections = ["header", "body", "footer"];

    sections.forEach((section) => {
      const sectionElement = screen.getByText(section, { exact: false });
      expect(sectionElement).toBeInTheDocument();
    });
  });
});
