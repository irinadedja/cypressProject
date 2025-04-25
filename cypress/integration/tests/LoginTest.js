import LoginPage from "../../support/pageObject/loginPage"; 
import testData from '../../fixtures/testData.json';



describe('login', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
       
      });
      

    it('Should be able to login page', () => {
        loginPage.login(testData.username, testData.password);
        cy.url().should('include','/inventory.html');
        
    });

    it('Should appear an error message',()=>{
        loginPage.login(testData.invalidUsername, testData.invalidPassword);
        loginPage.errorMessageDiv.should('contain','Username and password do not match any user in this service');

    })

});


