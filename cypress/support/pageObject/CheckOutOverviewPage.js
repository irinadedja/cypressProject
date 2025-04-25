class CheckOutOverviewPage {

    get summaryInfo() {
        return cy.get('.summary_info');
    }

    get subtotalPrice() {
        return cy.get('[data-test="subtotal-label"]');
    }

    get tax() {
        return cy.get('[data-test="tax-label"]');
    }

    get totalPrice() {
        return cy.get('[data-test="total-label"]');

    }

    get finishButton() {
        return cy.get('#finish');
    }



    verifyElements() {
        cy.scrollTo('bottom')
        cy.get('.summary_info').each(($element) => {
            this.subtotalPrice.should('include.text', '$17.98');
            this.tax.should('include.text', '$1.44');
            this.totalPrice.should('include.text', '$19.42');

        });

    }

    clickFinish() {
        this.finishButton.click();

    }
}
export default CheckOutOverviewPage;