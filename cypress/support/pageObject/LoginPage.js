class LoginPage {

  //selectors
  get usernameInput() {
    return cy.get('#user-name');
  }

  get passwordInput() {
    return cy.get('#password')
  }

  get loginButton() {
    return cy.contains('Login')
  }

  get errorMessageDiv() {
    return cy.get('[data-test="error"]')
  }

  //Actions

  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();

  }

}
export default LoginPage;