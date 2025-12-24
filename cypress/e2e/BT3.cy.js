describe('Drag and Drop Circles', () => {

    it('Drag and Drop Circles: Red, Blue, Green', () => {
        cy.visit('https://practice.expandtesting.com/drag-and-drop-circles')
        cy.get('.red').drag('#target')
        cy.get('.blue').drag('#target')
        cy.get('.green').drag('#target')
    })
})
