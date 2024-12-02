class ProductDetails {
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.itemDetailsHeader = this.page.locator('.inventory_details_name.large_size');
        this.addToCartButton = this.page.locator('#add-to-cart');
        this.removeFromCartButton = this.page.locator('#remove');
        this.backToProductsPageLink = this.page.locator('#back-to-products');
    }

    getItemImage(itemName){
        return this.itemImage = this.page.locator(`xpath=//img[@alt='${itemName}']`);
    }
}

export default ProductDetails;