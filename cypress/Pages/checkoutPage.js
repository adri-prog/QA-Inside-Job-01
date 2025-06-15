class CheckoutPage {
    clickCheckout() {
        cy.get('[data-test="checkout"]').click();
    }

    fillInformation(firstName, lastName, zip) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(zip);
        cy.get('[data-test="continue"]').click();
    }

    finishCheckout() {
        cy.get('[data-test="finish"]').click();
    }
}
export default CheckoutPage;
