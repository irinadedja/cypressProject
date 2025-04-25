import LoginPage from "../../support/pageObject/loginPage";
import ProductPage from "../../support/pageObject/ProductPage";
import testData from '../../fixtures/testData.json';

describe('Sort elements', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.login(testData.username, testData.password);


  });
  const productPage = new ProductPage();


  it('Should be able to login page', () => {
    cy.url().should('include', '/inventory.html');

  });

  it('should be able to sort and add to cart elements', () => {
    productPage.sortProduct(testData.value);

  })

})