const windowHeight = Cypress.config("viewportHeight");
const windowWidth = Cypress.config("viewportWidth");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= windowHeight &&
    rect.left <= windowWidth
  );
}

chai.Assertion.addMethod("inViewport", function () {
  const subject = this._obj;
  this.assert(
    isInViewport(subject[0]),
    `Expected element to be in viewport`,
    `Expected element not to be in viewport`
  );
});
