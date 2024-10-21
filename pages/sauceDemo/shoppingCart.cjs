const { expect } = require('@playwright/test');

exports.ShoppingCart = class ShoppingCart {

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

    getItemQuantity(index){
        return this.page.locator(`(//div[@class='cart_item']//div[@class='cart_quantity'])[${index}]`);
    }

    getItemNameLink(index){
        return this.page.locator(`(//div[@class='cart_item']//div[@class='inventory_item_name'])[${index}]`);
    }

    getItemPrice(index){
        return this.page.locator(`(//div[@class='cart_item']//div[@class='inventory_item_price'])[${index}]`);
    }

    getRemoveItemButton(index){
        return this.page.locator(`(//div[@class='cart_item']//button)[${index}]`);
    }
}
