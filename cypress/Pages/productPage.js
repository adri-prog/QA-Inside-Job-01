class ProductPage {
    addFirstProductToCart() {
        cy.get('.inventory_item').first().contains('Add to cart').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}
export default ProductPage;
