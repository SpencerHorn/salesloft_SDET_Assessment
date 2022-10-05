import { HomePage } from "../page-objects/home-page"

const homePage = new HomePage()

describe('Amazon search', () => {
  beforeEach(() => {
    // cy.viewport(1920, 1080)
    // Go to www.amazon.com
    homePage.navigateToHome()
  })

  context("Search", () => {

    it.only('As a user I should be able to search for and add 7 magnifying glasses to the cart so that I can view similar items', () => {
      // Enter “Magnifying Glass” into the search input field
      homePage.search('Magnifying Glass')
      // Select the option “Industrial & Scientific” category from the search dropdown
      homePage.selectDepartment('Industrial & Scientific')
      // Select Search
      homePage.clickSearch()
      // Verify the search bar and category selected for search are still populated
      homePage.validateDepartmentIsSelected('Industrial & Scientific')
      // Select Eligible for Free Shipping checkbox from filter menu
      homePage.toggleFreeShipping()
      // Select a “Magnifying Glass” to purchase
      homePage.selectItem()
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
      // Select the option “Industrial & Scientific” category from the search dropdown
      homePage.selectDepartment('Industrial & Scientific')
      // Select Search
      homePage.clickSearch()
      // Verify the search bar and category selected for search are still populated
      homePage.validateDepartmentIsSelected('Industrial & Scientific')
      // Select Eligible for Free Shipping checkbox from filter menu
      homePage.toggleFreeShipping()
      // Select a “Magnifying Glass” to purchase
      homePage.selectItem()
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