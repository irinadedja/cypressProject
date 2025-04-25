import CheckOutOverviewPage from "../../support/pageObject/CheckOutOverviewPage";
import LoginPage from "../../support/pageObject/loginPage"; 
import ProductPage from "../../support/pageObject/ProductPage";
import YourCart from "../../support/pageObject/YourCartPage";
import YourInformationCHeckOutPage from "../../support/pageObject/YourInformationCheckOutPage";
import testData from '../../fixtures/testData.json';


describe('login', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();


    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        loginPage.login(testData.username, testData.password);
        productPage.sortProduct(testData.value);
       
      });

      const yourCart = new YourCart();
      const yourInformationCHeckOutPage = new YourInformationCHeckOutPage();
      const checkOutOverviewPage = new CheckOutOverviewPage();

      it('should be able to add elements and continue the process', ()=>{

        yourCart.clickCheckOut();
        yourInformationCHeckOutPage.fillFields(testData.firstName,testData.lastName,testData.zipCode);
        checkOutOverviewPage.verifyElements();
        checkOutOverviewPage.clickFinish();

      })

    });