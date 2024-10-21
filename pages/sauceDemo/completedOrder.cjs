const { expect } = require('@playwright/test');

exports.CompletedOrder = class CompletedOrder {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.pageHeader = this.page.locator('.title');
        this.paymentInfo = this.page.locator(`div[data-test='payment-info-value']`);
        this.shippingInfo = this.page.locator(`div[data-test='shipping-info-value']`);
        this.subTotal = this.page.locator('.summary_subtotal_label');
        this.taxTotal = this.page.locator('.summary_tax_label');
        this.summaryTotal = this.page.locator('.summary_total_label');
        this.finishedButton = this.page.locator('id=finish');
        this.completedOrderConfirmation = this.page.locator('.complete-header');
        this.backHomeButton = this.page.locator('id=back-to-products');
    }
}