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

  // Function to add item to cart
  clickCart() {
    cy
      .get('#sw-gtc > .a-button-inner > .a-button-text')
      .click()
  }

  // Function to confirm all items were added to the cart
  validateQuantityInCart(text) {
    cy
      .get('#sc-subtotal-label-activecart')
      .contains(text)
  }

  // Function to click on compare similar items
  clickCompare() {
    cy
      .get('#comparison-lite-modal-B09TZSXT54')
      .click()
  }

  // Function to check for text of Similar items modal
  validateModal(text) {
    cy
      .get('#a-popover-content-2 > .a-size-large')
      .contains(text)
  }
  // Function to check item1 is related to the item in the cart
  validateModalItems1(text) {
    cy
      .get('.comparable_item_scroller1 > :nth-child(4) > .a-size-base')
      .contains(text)
  }
  // Function to confirm item2 is related to the item in the cart
  validateModalItems2(text) {
    cy
      .get('.comparable_item_scroller2 > :nth-child(4) > .a-size-base')
      .contains(text)
  }
  // Function to close compare items modal
  closeCompareItemsModal() {
    cy
      .get('.a-button-close > .a-icon')
      .click()
  }

  // Function take one argument to confirm department is still selected
  validateDepartmentIsSelected(department) {
    cy
      .get('select#searchDropdownBox option:selected')
      .should('have.text', department)
  }

  // Function to click option to see items with free shipping only
  toggleFreeShipping() {
    cy
      .get('input[type="checkbox"]')
      .eq(0)
      .check({ force: true })
  }

  // Function to select a “Magnifying Glass” to purchase
  selectItem() {
    cy
      .get('[data-asin="B09TZSXT54"]')
      .eq(0)
      .click()
  }
}