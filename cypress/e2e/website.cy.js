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
    const scrollDuration = 50;

    componentSelectors.forEach((selector) => {
      cy.get(selector).then((element) => {
        if (!element.is(":visible")) {
          cy.get(selector).scrollIntoView({ duration: scrollDuration });
          cy.get(selector).should("not.have.css", "opacity", "0");
        }
      });

      cy.get(selector)
        .find("*")
        .each((element) => {
          if (!element.is(":visible")) {
            if (element.is(".hover-overlay")) {
              cy.get(element).scrollIntoView({ duration: scrollDuration });
              cy.get(element)
                .realHover()
                .should("not.have.css", "opacity", "0");
            } else {
              cy.get(element).scrollIntoView({ duration: scrollDuration });
              cy.get(element).should("not.have.css", "opacity", "0");
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
