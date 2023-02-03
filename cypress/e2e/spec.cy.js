describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.expect(true).eql(false)
  })
})