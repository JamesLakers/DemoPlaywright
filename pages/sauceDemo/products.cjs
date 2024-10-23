const { expect } = require('@playwright/test');

exports.Products = class Products {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.pageHeader = this.page.locator('.title');
        this.productSortSelectbox = this.page.locator('.product_sort_container');
        this.itemsLabels = this.page.locator(`xpath=//div[@class='inventory_item_label']`);
    }

    async getPageHeader(){
        return await expect(this.pageHeader).toBeVisible();
    }

    getItemDetailsLink(itemName){
        return this.itemDetailsLink = this.page.locator(`(//div[@class='inventory_item_description']//a//div[contains(text(), '${itemName}')])`);
    }
}