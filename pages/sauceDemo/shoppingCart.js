import { expect } from '@playwright/test';

class ShoppingCart {
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.pageHeader = this.page.locator('.title');
        this.shoppingCartHeaderLink = this.page.locator('.shopping_cart_link');
        this.shoppingCartHeaderItemsCount = this.page.locator('.shopping_cart_badge');
        this.continueShoppingButton = this.page.locator('id=continue-shopping');
        this.checkoutButton = this.page.locator('id=checkout');
    }

    getShoppingCartHeaderItemCount(itemCount){
        expect(this.shoppingCartHeaderItemsCount).toContainText(itemCount);
    }

    getItemNameLink(itemName){
        expect(this.page.locator(`(//div[normalize-space()='${itemName}']`)).toBeVisible;
    }
}

export default ShoppingCart;