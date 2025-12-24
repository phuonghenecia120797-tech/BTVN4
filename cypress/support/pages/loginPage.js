
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
