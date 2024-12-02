import { expect } from '@playwright/test';

class CompletedOrder {

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

    async verifyPaymentAndShippingInfo(payInfo, shippingInfo){
        await expect(this.paymentInfo).toContainText(payInfo);
        await expect(this.shippingInfo).toContainText(shippingInfo);
    }

    async verifyPriceWithSalesTax(price){
        await expect(this.subTotal).toContainText(price.toString());

        let salesTax = Math.round((price * 0.08) * 100) / 100;
        await expect(this.taxTotal).toContainText(salesTax.toFixed(2));
        
        let finalPrice = (price + salesTax);
        await expect(this.summaryTotal).toContainText(finalPrice.toFixed(2));
    }
}

export default CompletedOrder;