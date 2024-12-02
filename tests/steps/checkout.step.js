import { Given, When, Then } from '@cucumber/cucumber';

When('I enter the shipping information', async function () {
    await this.pageFactory.checkout.pageHeader.isVisible();
    await this.pageFactory.checkout.enterShippingInformation('Lebron', 'James', '90210');
});

When('I click the continue to payment button', async function () {
    await this.pageFactory.checkout.continueButton.click();
});