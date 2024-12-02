import { Given, When, Then } from '@cucumber/cucumber';
import items from '../data/items.json' assert { type: 'json' };;

When('I verify the payment and shipping information', async function () {
    await this.pageFactory.completedOrder.pageHeader.isVisible();
    await this.pageFactory.completedOrder.verifyPaymentAndShippingInfo('SauceCard #31337', 'Free Pony Express Delivery!');
});

When('I verify the price {float} with sales tax included', async function (price) {
    await this.pageFactory.completedOrder.verifyPriceWithSalesTax(price);
});

When('I verify the price for all items from file with sales tax included', async function () {    
    let itemsTotal = 0;
    for (const item of items) {
        itemsTotal += item.price;
    }
    await this.pageFactory.completedOrder.verifyPriceWithSalesTax(itemsTotal);
});

Then('I complete my purchase receiving completed confirmation', async function () {
    await this.pageFactory.completedOrder.finishedButton.click();
    await this.pageFactory.completedOrder.completedOrderConfirmation.isVisible();
});