describe('template spec', () => {
  it('Tìm phần tử ', () => {
    cy.visit('https://practice.expandtesting.com/large');
    cy.contains('td', '48.48')
      .scrollIntoView()
      .should('be.visible')
  })
})