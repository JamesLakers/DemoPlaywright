import { Given, When, Then } from '@cucumber/cucumber';
import items from '../data/items.json' assert { type: 'json' };;

When('The items count in the shopping cart is {string}', async function (itemCount) {
    await this.pageFactory.shoppingCart.shoppingCartHeaderItemsCount.isVisible();
    await this.pageFactory.shoppingCart.getShoppingCartHeaderItemCount(itemCount);
});

When('The items count in the shopping cart is the amount of items from file', async function () {
    await this.pageFactory.shoppingCart.shoppingCartHeaderItemsCount.isVisible();
    await this.pageFactory.shoppingCart.getShoppingCartHeaderItemCount(items.length.toString());
});

When('I click the shopping cart icon in the header', async function () {
    await this.pageFactory.shoppingCart.shoppingCartHeaderLink.click();
});

When('I verify the shopping cart has the correct item {string}', async function (itemName) {
    await this.pageFactory.shoppingCart.pageHeader.isVisible();
    await this.pageFactory.shoppingCart.getItemNameLink(itemName);
});

When('I verify the shopping cart has the correct items from file', async function () {
    await this.pageFactory.shoppingCart.pageHeader.isVisible();
    for (const item of items) {
        await this.pageFactory.shoppingCart.getItemNameLink(item);
    }    
});

When('I click the checkout button', async function () {
    await this.pageFactory.shoppingCart.checkoutButton.click()
});

