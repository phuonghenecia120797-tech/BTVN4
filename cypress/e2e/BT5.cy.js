describe('Slow page wait until complete', () => {
  it('Thực hiện chờ tới khi task hoàn tất', () => {
    cy.visit('https://practice.expandtesting.com/slow')
    cy.contains('The slow task has finished. Thanks for waiting!', { timeout: 15000 }).should('be.visible')
  })
})
