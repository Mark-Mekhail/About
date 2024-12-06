import "cypress-real-events/support";

const viewportSizes = [
  { name: "narrow", width: 400, height: 800 },
  { name: "standard", width: 1920, height: 1080 },
]

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

for (const viewportSize of viewportSizes) {
  describe(`Test webpage on ${viewportSize.width}x${viewportSize.height} viewport`, () => {
    beforeEach(() => {
      cy.viewport(viewportSize.width, viewportSize.height);
      cy.visit("/");
    });

    it("contains main sections and components", () => {
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
          .not(".hover-overlay")
          .each((element) => {
            if (!element.is(":visible")) {
              cy.get(element).scrollIntoView({ duration: scrollDuration });
              cy.get(element).should("not.have.css", "opacity", "0");
            }
          });
      });
    });

    it("shows all hover overlays on hover", () => {
      cy.get(".hover-overlay").each((overlay) => {
        cy.get(overlay).realHover();
        cy.get(overlay).should("have.css", "opacity", "1");
      });
    });

    it.only("scrolls to the appropriate section when clicking on a nav link", () => {
      // Wait for the links to animate in
      cy.wait(4000);

      cy.get("header .nav .nav-item").each((link) => {
        if (viewportSize.name === "narrow") {
          cy.get("header .nav .icon").click();
        }

        cy.get(link).click().invoke("text").then((text) => {
          const section = text.toLowerCase();
          cy.get(`section.${section}`).should("be.inViewport");
        });
      });
    });

    it("opens all links in new tab", () => {
      cy.get("a").each((link) => {
        cy.get(link).should("have.attr", "target", "_blank");
      });
    });
  });
}