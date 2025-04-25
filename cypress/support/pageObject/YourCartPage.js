class YourCart{

    //selector

    get checkOut(){
        return cy.get('#checkout');
    }

    
    clickCheckOut(){
        this.checkOut.click();

    }
}
export default YourCart;