import { Given, When, Then } from '@cucumber/cucumber';
import items from '../data/items.json' assert { type: 'json' };

When('I click the item {string} view details link', async function (itemName) {
    await this.pageFactory.products.getItemDetailsLink(itemName).click();
});

When('I add the items from file', async function () {
    for (const item of items) {
        await this.pageFactory.products.getItemDetailsLink(item.itemName).click();
        await this.pageFactory.productDetails.itemDetailsHeader.isVisible();
        await this.pageFactory.productDetails.addToCartButton.click();
        await this.pageFactory.productDetails.backToProductsPageLink.click();
    }
});