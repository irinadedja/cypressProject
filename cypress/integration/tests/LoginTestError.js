import LoginPage from "../../support/pageObject/loginPage"; 
import testData from '../../fixtures/testData.json';

describe(LoginPage,()=>{
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
       
      });
      

    it('Should not be able to login page', () => {
        loginPage.login(testData.username, testData.password);
        cy.url().should('include','/inventory.html');
        
    });
//this test is only to test the screenshot during failed 

    it('Should appear an error message',()=>{
        loginPage.login(testData.invalidUsername, testData.invalidPassword);
        loginPage.errorMessageDiv.should('contain','Login passed successfully!');


    })

});
