export class HomePage {

  // Function to take you to root page of the application
  navigateToHome() {
    cy.visit('https://www.amazon.com')
  }

  // Function takes one argument to search amazons search input field
  search(type) {
    cy
      .getByAriaLabel("Search")
      .type(type)
  }

  // Function takes one argument to select a department from the dropdown attached to the amazon search input field
  selectDepartment(department) {
    cy
      .get('#twotabsearchtextbox')
      .click()
      .get('#searchDropdownBox')
      .select(department, { force: true })
  }
  // Function to click search button next to the amazon search input field
  clickSearch() {
    cy
      .get('#nav-search-submit-button')
      .click()
  }

  // Function takes one argument to select the quantity of items to purchase
  selectQuantity(quantity) {
    cy
      .get('#quantity')
      .select(quantity, { force: true })
  }

  // Function to click add to cart button
  clickAddToCart() {
    cy
      .get('#add-to-cart-button')
      .click()
  }

  // Function take one argument to confirm message displaying items were added to cart
  validateAddedToCart(text) {
    cy
      .get('.a-size-medium-plus')
      .contains(text)
  }

  // cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
  clickCart() {
    cy
      .get('#sw-gtc > .a-button-inner > .a-button-text')
      .click()
  }

  // cy.get('#sc-subtotal-label-activecart').contains('Subtotal (7 items):')
  validateQuantityInCart(text) {
    cy
      .get('#sc-subtotal-label-activecart')
      .contains(text)
  }

  // cy.get('#comparison-lite-modal-B09TZSXT54').click()
  clickCompare() {
    cy
      .get('#comparison-lite-modal-B09TZSXT54')
      .click()
  }

  // cy.get('#a-popover-content-2 > .a-size-large').contains('Compare with similar items')
  validateModal(text) {
    cy
      .get('#a-popover-content-2 > .a-size-large')
      .contains(text)
  }
  // cy.get('.comparable_item_scroller1 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
  validateModalItems1(text) {
    cy
      .get('.comparable_item_scroller1 > :nth-child(4) > .a-size-base')
      .contains(text)
  }
  // cy.get('.comparable_item_scroller2 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
  validateModalItems2(text) {
    cy
      .get('.comparable_item_scroller2 > :nth-child(4) > .a-size-base')
      .contains(text)
  }
  // cy.get('.a-button-close > .a-icon').click()
  closeCompareItemsModal() {
    cy
      .get('.a-button-close > .a-icon')
      .click()
  }
}