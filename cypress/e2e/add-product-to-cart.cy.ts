describe('add product to cart', () => {
  it("should be able to navigate to the produc's page and add it to the cart", () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href^="/product"').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not count a duplicate product in the cart', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href^="/product"').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    const productTitle = 'Sweatshirt Never Stop Learning'
    cy.visit('http://localhost:3000')
    cy.get('input[name="q"]').type(productTitle)
    cy.get('input[name="q"]').parent('form').submit()

    cy.contains('Results for:').should('exist')

    cy.get('a[href^="/product"').first().click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })
})