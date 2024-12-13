describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("should be able to navigate to the produc's page and add it to the cart", () => {
    cy.get('a[href^="/product"').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not count a duplicate product in the cart', () => {
    cy.get('a[href^="/product"').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    const productTitle = 'Sweatshirt Never Stop Learning'
    cy.searchByQuery(productTitle)

    cy.contains('Results for:').should('exist')

    cy.get('a[href^="/product"').first().click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })
})
