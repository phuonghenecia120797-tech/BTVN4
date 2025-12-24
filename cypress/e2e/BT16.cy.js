describe('E2E - Notes App', () => {

  const uid = Date.now();

  const user = {
    name: `User ${uid}`,
    email: `user${uid}@gmail.com`,
    password: `Pwd${uid}aB@`
  };

  const note = {
    title: 'Ghi chú cuộc họp',
    description: 'Ghi chú được tạo bởi Cypress'
  }

  it('Register -> Login -> Create Note -> Verify -> Delete Note', () => {

    // 1. REGISTER

    cy.visit('https://practice.expandtesting.com/notes/app');
cy.get('.btn.btn-outline-secondary.btn-lg.px-4').click()
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('#name').type(user.name)
    cy.get('#confirmPassword').type(user.password)
 cy.get('.btn.btn-lg.btn-primary.d-block.w-100').click()

    // 2. LOGIN

    cy.get('.text-decoration-none.me-3').click();
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('.btn.btn-lg.btn-primary.d-block.w-100').click();

    // 3. CREATE NEW NOTE

    cy.contains('button', 'Add Note').click();
    cy.get('#title').type(note.title);
    cy.get('#description').type(note.description);
    cy.contains('button', 'Creat').click();

    // 4. VERIFY NOTE EXIST

    cy.contains('.card-header.fw-bold.text-truncate', note.title)
      .should('be.visible');
    cy.contains('.card-body.d-flex.flex-column', note.description)
      .should('be.visible');

    // 5. DELETE NOTE

    cy.contains('.card', note.title)
      .within(() => {
        cy.contains('button', 'Delete').click()
      })
  })
})
