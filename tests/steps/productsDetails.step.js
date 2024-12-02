import { Given, When, Then } from '@cucumber/cucumber';

When('The item {string} image is displayed successfully', async function (itemName) {
    await this.pageFactory.productDetails.itemDetailsHeader.isVisible();
    await this.pageFactory.productDetails.getItemImage(itemName).isVisible();
});

When('I click the add item to cart button', async function () {
    await this.pageFactory.productDetails.addToCartButton.click();
});