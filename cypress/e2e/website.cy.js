import "cypress-real-events/support";

beforeEach(() => {
  cy.visit("/");
});

const componentSelectors = [
  "header",
  "section.intro",
  "section.photos",
  "section.about",
  "section.experience",
  "section.skills",
  "section.projects",
  "footer",
];

describe("About Mark webpage", () => {
  it("finds main sections and components", () => {
    componentSelectors.forEach((selector) => {
      cy.get(selector).should("exist");
    });
  });

  it("shows all elements on scroll", () => {
    componentSelectors.forEach((selector) => {
      const section = cy.get(selector);

      section.then((element) => {
        if (!element.is(":visible")) {
          section
            .scrollIntoView({ duration: 25 })
            .should("not.have.css", "opacity", "0");
        }
      });

      section.find("*").each((element, index) => {
        if (!element.is(":visible")) {
          if (element.is(".hover-overlay")) {
            cy.get(element)
              .scrollIntoView({ duration: 25 })
              .realHover()
              .should("not.have.css", "opacity", "0");
          } else {
            cy.get(element)
              .scrollIntoView({ duration: 25 })
              .should("not.have.css", "opacity", "0");
          }
        }
      });
    });
  });

  it("opens all links in new tab", () => {
    cy.get("a").each((link) => {
      cy.get(link).should("have.attr", "target", "_blank");
    });
  });
});
