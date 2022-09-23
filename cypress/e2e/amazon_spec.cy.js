describe('Amazon search', () => {
  beforeEach(() => {
    // cy.viewport(1920, 1080)
    // Go to www.amazon.com
    cy.visit('https://www.amazon.com')
  })

  context("Search", () => {

    it('As a user I should be able to search for and add 7 magnifying glasses to the cart so that I can view similar items', () => {
      // Enter “Magnifying Glass” into the search input field
      cy.getByAriaLabel("Search").type('Magnifying Glass')
      //select the option “Industrial & Scientific” category from the search dropdown
      cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Industrial & Scientific',{force: true})
      // Select Search
      cy.get('#nav-search-submit-button').click()
      // Verify the search bar and category selected for search are still populated
      cy.get('select#searchDropdownBox option:selected').should('have.text', 'Industrial & Scientific')
      // TODO: cy.get('#twotabsearchtextbox').contains('Magnifying Glass')
      // Select ‘Prime’ checkbox from filter menu
      // Verify all items listed for “Magnifying Glass” are for prime delivery only
      // ^^ Only available if you login I have sent question to Sidney
      // Select a “Magnifying Glass” to purchase
      cy.get('[data-index="5"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
      // Add QTY of '7' Magnifying Glass to cart
      cy.get('#quantity').select('7',{force: true})
      cy.get('#add-to-cart-button').click()
      // Verify ‘Added to Cart’ displays
      cy.get('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading').contains('Added to Cart')
      // Select ‘Cart’
      cy.get('#attach-sidesheet-view-cart-button').click()
      // Verify correct quantity of items is in cart
      cy.get('#sc-subtotal-label-activecart').contains('Subtotal (7 items):')
      // Select ‘Compare with similar items’
      cy.get('#comparison-lite-modal-B07G55FSPX').click()
      // Verify pop up box of similar items displays
      cy.get('#a-popover-content-2 > .a-size-large').contains('Compare with similar items')
      cy.get('.comparable_item_scroller1 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
      cy.get('.comparable_item_scroller2 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
      // Close pop up box
      cy.get('.a-button-close > .a-icon').click()
    })

    it.only('As a user if I add less than 7 items to the cart, this test will fail', () => {
      // Enter “Magnifying Glass” into the search input field
      cy.getByAriaLabel("Search").type('Magnifying Glass')
      //select the option “Industrial & Scientific” category from the search dropdown
      cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Industrial & Scientific',{force: true})
      // Select Search
      cy.get('#nav-search-submit-button').click()
      // Verify the search bar and category selected for search are still populated
      cy.get('select#searchDropdownBox option:selected').should('have.text', 'Industrial & Scientific')
      // TODO: cy.get('#twotabsearchtextbox').contains('Magnifying Glass')
      // Select ‘Prime’ checkbox from filter menu
      // Verify all items listed for “Magnifying Glass” are for prime delivery only
      // ^^ Only available if you login I have sent question to Sidney
      // Select a “Magnifying Glass” to purchase
      cy.get('[data-index="5"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
      // Add QTY of '7' Magnifying Glass to cart
      // cy.get('#quantity').select('7',{force: true})
      cy.get('#add-to-cart-button').click()
      // Verify ‘Added to Cart’ displays
      cy.get('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading').contains('Added to Cart')
      // Select ‘Cart’
      cy.get('#attach-sidesheet-view-cart-button').click()
      // Verify correct quantity of items is in cart
      cy.get('#sc-subtotal-label-activecart').contains('Subtotal (7 items):')
    })

  })
})