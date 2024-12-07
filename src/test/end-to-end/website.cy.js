import "cypress-real-events/support";

const viewportSizes = [
  { name: "standard", width: 1920, height: 1080 },
  { name: "narrow", width: 400, height: 800 },
];

const mainSections = [
  "header",
  "intro",
  "about",
  "experience",
  "skills",
  "projects",
  "footer",
];

const selectors = {
  header: "header",
  intro: "[role=intro]",
  about: "[role=about]",
  experience: "[role=experience]",
  skills: "[role=skills]",
  projects: "[role=projects]",
  footer: "footer",
  hoverOverlay: "[role=hover-overlay]",
  menuIcon: "[role=menu-icon]",
  navItem: "[role=nav-item]",
};

viewportSizes.forEach((viewportSize) => {
  describe(`Test webpage on ${viewportSize.width}x${viewportSize.height} viewport`, () => {
    beforeEach(() => {
      cy.viewport(viewportSize.width, viewportSize.height);
      cy.visit("/");
    });

    it("contains main sections and components", () => {
      mainSections.forEach((section) => {
        cy.get(selectors[section]).should("exist");
      });
    });

    it("shows all elements after scrolling through the page", () => {
      cy.get(selectors.footer).then((element) => {
        const scrollableHeight = ((element[0].offsetTop + element[0].offsetHeight) / viewportSize.height) * 1000;
        cy.get(element).scrollIntoView({ duration: scrollableHeight, easing: "linear" });
      });

      mainSections.forEach((section) => {
        const selector = selectors[section];
        cy.get(selector).then((element) => {
          if (!element.is(":visible")) {
            cy.get(selector).should("not.have.css", "opacity", "0");
          }
        });

        cy.get(selector)
          .find("*")
          .not(selectors.hoverOverlay)
          .each((element) => {
            if (!element.is(":visible")) {
              cy.get(element).should("not.have.css", "opacity", "0");
            }
          });
      });
    });

    it("shows all hover overlays on hover", () => {
      cy.get(selectors.hoverOverlay).each((overlay) => {
        cy.get(overlay).realHover();
        cy.get(overlay).should("have.css", "opacity", "1");
      });
    });

    it("scrolls to the appropriate section when clicking on a nav link", () => {
      const ensureNavMenuExpanded = () => {
        if (viewportSize.name === "narrow") {
          cy.get(selectors.menuIcon).should("be.visible");
          cy.get(selectors.menuIcon).click();
        }
      }
      
      ensureNavMenuExpanded();
      cy.get(selectors.navItem).each((link) => {
        ensureNavMenuExpanded();

        cy.get(link).should("be.visible");
        cy.get(link).click();
        cy.get(link)
          .invoke("text")
          .then((text) => {
            const section = text.toLowerCase();
            cy.get(selectors[section]).should("be.inViewport");
          });
      });
    });

    it("opens all links in new tab", () => {
      cy.get("a").each((link) => {
        cy.get(link).should("have.attr", "target", "_blank");
      });
    });
  })
});
