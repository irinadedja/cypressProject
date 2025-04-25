class ProductPage {

    get sortProducts() {
        return cy.get('select[data-test="product-sort-container"]');
        
    } 

    get itemPrice() {
        return cy.get('[data-test="inventory-item-price"]');

    }

    get CartButton() {
        return cy.get('.btn_inventory');
    }


    get clickCart() {
        return cy.get('#shopping_cart_container');
    }


    selectAllProductPriceLess10() {
        cy.get('[data-test="inventory-item"]').each(($product) => {
            const itemPrice = $product.find('[data-test="inventory-item-price"]').text();
            const addToCartButton = $product.find('.btn_inventory');
            const alternative = itemPrice.replace('$', '');
            const priceText = itemPrice.split('$')[1];

            const priceValue = parseFloat(alternative);
            if (priceText < 10) {
                addToCartButton.click();
            }
        });

    }

    sortProduct(value) {
        this.sortProducts.select(value);
        this.selectAllProductPriceLess10();
        this.clickCart.click();
    }

}
export default ProductPage;