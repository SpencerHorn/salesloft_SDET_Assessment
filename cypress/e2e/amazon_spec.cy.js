import { HomePage } from "../page-objects/home-page"

const homePage = new HomePage()

describe('Amazon search', () => {
  beforeEach(() => {
    // cy.viewport(1920, 1080)
    // Go to www.amazon.com
    homePage.navigateToHome()
  })

  context("Search", () => {

    it('As a user I should be able to search for and add 7 magnifying glasses to the cart so that I can view similar items', () => {
      // Enter “Magnifying Glass” into the search input field
      homePage.search('Magnifying Glass')
      //select the option “Industrial & Scientific” category from the search dropdown
      homePage.selectDepartment('Industrial & Scientific')
      // Select Search
      homePage.clickSearch()
      // Verify the search bar and category selected for search are still populated
      cy.get('select#searchDropdownBox option:selected').should('have.text', 'Industrial & Scientific')
      // Select Eligible for Free Shipping checkbox from filter menu
      cy.get('input[type="checkbox"]').eq(0).check({ force: true })
      // Select a “Magnifying Glass” to purchase
      cy.get('[data-asin="B09TZSXT54"]').eq(0).click()
      // Add QTY of '7' Magnifying Glass to cart
      homePage.selectQuantity('7')
      // Click add to cart
      homePage.clickAddToCart()
      // Verify ‘Added to Cart’ displays
      homePage.validateAddedToCart('Added to Cart')
      // Select ‘Cart’
      homePage.clickCart()
      // Verify correct quantity of items is in cart
      homePage.validateQuantityInCart('Subtotal (7 items):')
      // Select ‘Compare with similar items’
      homePage.clickCompare()
      // Verify pop up box of similar items displays
      homePage.validateModal('Compare with similar items')
      homePage.validateModalItems1('Magnifying Glass')
      homePage.validateModalItems2('Magnifying Glass')
      // Close modal
      homePage.closeCompareItemsModal()
    })

    it('As a user if I add less than 7 items to the cart, this test will fail', () => {
      // Enter “Magnifying Glass” into the search input field
      homePage.search('Magnifying Glass')
      //select the option “Industrial & Scientific” category from the search dropdown
      homePage.selectDepartment('Industrial & Scientific')
      // Select Search
      homePage.clickSearch()
      // Verify the search bar and category selected for search are still populated
      cy.get('select#searchDropdownBox option:selected').should('have.text', 'Industrial & Scientific')
      // Select Eligible for Free Shipping checkbox from filter menu
      cy.get('input[type="checkbox"]').eq(0).check({ force: true })
      // Select a “Magnifying Glass” to purchase
      cy.get('[data-asin="B09TZSXT54"]').eq(0).click()
      // Add QTY of '7' Magnifying Glass to cart
      homePage.selectQuantity('6')
      // Click add to cart
      homePage.clickAddToCart()
      // Verify ‘Added to Cart’ displays
      homePage.validateAddedToCart('Added to Cart')
      // Select ‘Cart’
      homePage.clickCart()
      // Verify correct quantity of items is in cart
      // Test will fail here
      homePage.validateQuantityInCart('Subtotal (7 items):')
      // Select ‘Compare with similar items’
      homePage.clickCompare()
      // Verify pop up box of similar items displays
      homePage.validateModal('Compare with similar items')
      homePage.validateModalItems1('Magnifying Glass')
      homePage.validateModalItems2('Magnifying Glass')
      // Close modal
      homePage.closeCompareItemsModal()
    })

  })
})