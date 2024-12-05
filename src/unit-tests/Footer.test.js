import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { socials } from "../constants/content";

const currentYear = new Date().getUTCFullYear();
const iconsLink = "https://icons8.com/";
const copyRightText = `© ${currentYear} Mark Mekhail. Icons by`;

describe("Footer Component", () => {
  test("renders social links", () => {
    render(<Footer />);

    socials.forEach((social) => {
      const linkElement = screen.getByRole("link", {
        name: `${social.icon.alt} ${social.site}`,
      });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", social.link);

      const imageElement = screen.getByAltText(social.icon.alt);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", social.image);
    });
  });

  test("renders copyright information", () => {
    render(<Footer />);

    const copyrightElement = screen.getByText(copyRightText, { exact: false });
    const iconsLinkElement = screen.getByRole("link", { name: "Icons8" });

    expect(copyrightElement).toBeInTheDocument();
    expect(iconsLinkElement).toBeInTheDocument();
    expect(iconsLinkElement).toHaveAttribute("href", iconsLink);
  });
});
