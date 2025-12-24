describe('Get Answer number - stable solution', () => {
  it('Should get answer number safely', () => {
    cy.visit('https://practice.expandtesting.com/challenging-dom')

    cy.get('#canvas')
      .invoke('text')
      .then((text) => {
        cy.log(`TEXT = [${text}]`)

        const parts = text.split(':')

        expect(parts.length).to.be.greaterThan(1)

        const number = parts[1].trim()
        expect(number).to.not.equal('')

        cy.log(number)
      })
  })
})
