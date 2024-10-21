const { expect } = require('@playwright/test');

exports.Checkout = class Checkout {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.pageHeader = this.page.locator('.title');
        this.firstNameTextBox = this.page.locator('id=first-name');
        this.lastNameTextBox = this.page.locator('id=last-name');
        this.zipPostalCodeTextBox = this.page.locator('id=postal-code');
        this.continueButton = this.page.locator('id=continue');
        this.cancelButton = this.page.locator('id=cancel');
        this.errorMessage = this.page.locator(`h3[data-test='error']`);
    }
}