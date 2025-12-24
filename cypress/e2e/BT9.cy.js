describe('Click yellow button 10 times', () => {
  it('Click yellow button 10 times with redirect', () => {
    cy.visit('https://practice.expandtesting.com/challenging-dom')

    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-warning.mb-2')
        .should('be.visible')
        .click()
        
      // Chờ redirect / reload xong
      cy.url().should('include', '/challenging-dom')

    }
  })
})
