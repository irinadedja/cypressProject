class YourInformationCHeckOutPage {

   get firstName() {
      return cy.get('#first-name');
   }

   get lastName() {
      return cy.get('#last-name');
   }

   get postalCode() {
      return cy.get('#postal-code');
   }

   get continueButton() {
      return cy.get('#continue');
   }



   fillFields(firstName, lastName, zipCode) {
      this.firstName.type(firstName);
      this.lastName.type(lastName);
      this.postalCode.type(zipCode);
      this.continueButton.click();
   }


}
export default YourInformationCHeckOutPage;