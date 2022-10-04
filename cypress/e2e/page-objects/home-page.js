export class HomePage {

  navigateToHome() {
    cy.visit('https://www.amazon.com')
  }

  search(type) {
    cy
      .getByAriaLabel("Search")
      .type(type)
  }

}