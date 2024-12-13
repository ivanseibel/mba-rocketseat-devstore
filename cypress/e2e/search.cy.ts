describe('search for products', () => {
  it('should be able to find a product', () => {
    const productTitle = 'Sweatshirt'
    cy.searchByQuery(productTitle)

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', `q=${productTitle}`)

    cy.contains('Results for:').should('exist')

    cy.get('a[href^="/product"').should('exist')
  })

  it('should display a message when no products are found', () => {
    const productTitle = 'Non-existing'
    cy.searchByQuery(productTitle)

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', `q=${productTitle}`)

    cy.contains('No products found').should('exist')
  })

  it('should not be able to search if no query is provided', () => {
    cy.visit('/')
    cy.get('input[name="q"]').parent('form').submit()

    cy.location('pathname').should('not.include', '/search')
  })

  it('should not be able to hit the search endpoint directly without a query', () => {
    cy.visit('/search')

    cy.location('pathname').should('not.include', '/search')
  })
})
