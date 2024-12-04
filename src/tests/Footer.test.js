import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

const socials = [
  { link: "https://example.com", icon: { src: "path/to/image1.png", alt: "image 1" }, site: "Site 1" },
  { link: "https://example.com", icon: { src: "path/to/image2.png", alt: "image 2" }, site: "Site 2" },
]
jest.mock("../constants/content", () => ({
  socials: socials,
}));

describe("Footer Component", () => {
  test("renders social links", () => {
    render(<Footer />);

    socials.forEach((social) => {
      const linkElement = screen.getByRole("link", { name: `${social.icon.alt} ${social.site}` });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", social.link);

      const imageElement = screen.getByAltText(social.icon.alt);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", social.image);
    });
  });

  test("renders copyright information", () => {
    const currentYear = new Date().getUTCFullYear();
    const iconsLink = "https://icons8.com/";
    render(<Footer />);

    const copyrightElement = screen.getByText(
      `© ${currentYear} Mark Mekhail. Icons by`
    );

    expect(copyrightElement).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Icons8" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Icons8" })).toHaveAttribute("href", iconsLink);
  });
});
