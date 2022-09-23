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
      // Select Eligible for Free Shipping checkbox from filter menu
      cy.get('input[type="checkbox"]').eq(0).check({ force: true })
      // Select a “Magnifying Glass” to purchase
      cy.get('[data-asin="B09TZSXT54"]').eq(0).click()
      // Add QTY of '7' Magnifying Glass to cart
      cy.get('#quantity').select('7',{force: true})
      cy.get('#add-to-cart-button').click()
      // Verify ‘Added to Cart’ displays
      cy.get('.a-size-medium-plus').contains('Added to Cart')
      // Select ‘Cart’
      cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
      // Verify correct quantity of items is in cart
      cy.get('#sc-subtotal-label-activecart').contains('Subtotal (7 items):')
      // Select ‘Compare with similar items’
      cy.get('#comparison-lite-modal-B09TZSXT54').click()
      // Verify pop up box of similar items displays
      cy.get('#a-popover-content-2 > .a-size-large').contains('Compare with similar items')
      cy.get('.comparable_item_scroller1 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
      cy.get('.comparable_item_scroller2 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
      // Close pop up box
      cy.get('.a-button-close > .a-icon').click()
    })

    it('As a user if I add less than 7 items to the cart, this test will fail', () => {
           // Enter “Magnifying Glass” into the search input field
           cy.getByAriaLabel("Search").type('Magnifying Glass')
           //select the option “Industrial & Scientific” category from the search dropdown
           cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Industrial & Scientific',{force: true})
           // Select Search
           cy.get('#nav-search-submit-button').click()
           // Verify the search bar and category selected for search are still populated
           cy.get('select#searchDropdownBox option:selected').should('have.text', 'Industrial & Scientific')
           // Select Eligible for Free Shipping checkbox from filter menu
           cy.get('input[type="checkbox"]').eq(0).check({ force: true })
           // Select a “Magnifying Glass” to purchase
           cy.get('[data-asin="B09TZSXT54"]').eq(0).click()
           // Add QTY of '7' Magnifying Glass to cart
           cy.get('#quantity').select('6',{force: true})
           cy.get('#add-to-cart-button').click()
           // Verify ‘Added to Cart’ displays
           cy.get('.a-size-medium-plus').contains('Added to Cart')
           // Select ‘Cart’
           cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
           // Verify correct quantity of items is in cart
           // Should fail here.
           cy.get('#sc-subtotal-label-activecart').contains('Subtotal (7 items):')
           // Select ‘Compare with similar items’
           cy.get('#comparison-lite-modal-B09TZSXT54').click()
           // Verify pop up box of similar items displays
           cy.get('#a-popover-content-2 > .a-size-large').contains('Compare with similar items')
           cy.get('.comparable_item_scroller1 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
           cy.get('.comparable_item_scroller2 > :nth-child(4) > .a-size-base').contains('Magnifying Glass')
           // Close pop up box
           cy.get('.a-button-close > .a-icon').click()
    })

  })
})