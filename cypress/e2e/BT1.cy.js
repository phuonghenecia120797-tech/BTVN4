import LoginPage from '../page/loginPage'

describe('Login Test - Data Driven', () => {

  const url = 'https://practice.expandtesting.com/login'

  // ===== Reuse elements =====
  const LoginPage = {
    visit() {
      cy.visit(url)
    },

    username() {
      return cy.get('#username')
    },

    password() {
      return cy.get('#password')
    },

    loginBtn() {
      return cy.get('button[type="submit"]')
    },

    message() {
      return cy.get('#flash')
    },

    logoutBtn() {
      return cy.contains('Logout')
    },

    login(username, password) {
      this.username().clear().type(username)
      this.password().clear().type(password)
      this.loginBtn().click()
    }
  }

  beforeEach(() => {
    LoginPage.visit()
    cy.url().should('include', '/login')
    cy.contains('Login').should('be.visible')
  })

  it('Execute login test cases', () => {
    cy.fixture('loginData').then((testCases) => {

      testCases.forEach((data) => {

        cy.log(`Executing: ${data.testcase}`)

        LoginPage.login(data.username, data.password)

        if (data.type === 'success') {
          cy.url().should('include', data.expectedUrl)

          LoginPage.message()
            .should('be.visible')
            .and('contain', 'You logged into a secure area')

          LoginPage.logoutBtn().should('be.visible').click()
          cy.url().should('include', '/login')

        } else {
          LoginPage.message()
            .should('be.visible')
            .and('contain', data.message.replace('.', ''))

          cy.url().should('include', '/login')
        }
      })

    })
  })

})
