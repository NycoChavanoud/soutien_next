describe("Form", function () {
  it("can send my form with succès", function () {
    cy.visit("/form");
    cy.get('[data-cy="firstname"]').type("Nico");
    cy.get('[data-cy="lastname"]').type("World");
    cy.get('[data-cy="city"]').type("Lyon");
    cy.get('[data-cy="description"]').type(
      "lorem ipsum nicolum fatum maesunum de et lae imprvisum"
    );
    cy.url().should("include", "/users");
  });
});
