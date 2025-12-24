describe('DOM Locators Practice', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/locators')
  })

  it('Query elements using different locators', () => {

    // 1️⃣ getByRole – tìm nút "Contact"
    cy.findByRole('link', { name: 'Contact' })
      .should('be.visible')

    // 2️⃣ contais – tìm text "Hot Deal: Buy 1 Get 1 Free" (getByText mà không chạy được)
    cy.contains('Hot Deal: Buy 1 Get 1 Free')
      .should('be.visible')

    // 3️⃣ getByLabel – tìm input theo label
    cy.findByLabelText('Choose a country')
      .should('be.visible')

    cy.findByLabelText('Email for newsletter')
      .should('be.visible')

    // 4️⃣ getByPlaceholder – tìm input có placeholder
    cy.findByPlaceholderText('Search the site')
      .should('be.visible')

    // 5️⃣ getByAltText – tìm ảnh theo alt
    cy.findByAltText('User avatar')
      .should('be.visible')

    // 6️⃣ getByTitle – tìm phần tử có tooltip
    cy.findByTitle('Settings panel')
      .should('be.visible')

    // 7️⃣ getByTestId – tìm theo data-testid
    cy.findByTestId('status-message')
      .should('be.visible')

    cy.findByTestId('user-name')
      .should('be.visible')

    // 8️⃣ Legacy class selector (không tìm thấy trên đề bài luôn)
   // cy.get('.legacy-target')
    //  .should('be.visible')

  })
})
