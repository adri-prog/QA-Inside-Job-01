import LoginPage from '../Pages/loginPage';
import ProductPage from '../Pages/productPage';
import CheckoutPage from '../Pages/checkoutPage';

const loginPage = new LoginPage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();

describe('E2E Flow: Login > Add to Cart > Checkout', () => {
    it('should complete purchase on saucedemo.com', () => {
        loginPage.visit();
        loginPage.fillUsername('standard_user');
        loginPage.fillPassword('secret_sauce');
        loginPage.clickLogin();

        cy.url().should('include', '/inventory.html');

        productPage.addFirstProductToCart();
        productPage.goToCart();

        checkoutPage.clickCheckout();
        checkoutPage.fillInformation('Adrian', 'Hasbad', '12345');
        checkoutPage.finishCheckout();

        cy.contains('Thank you for your order').should('be.visible');
    });
});
