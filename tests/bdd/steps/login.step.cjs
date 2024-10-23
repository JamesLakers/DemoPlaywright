const { chromium, firefox, webkit } = require('@playwright/test');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Login } = require('../../../pages/sauceDemo/login.cjs');
const { Products } = require('../../../pages/sauceDemo/products.cjs');
let page, login, products;
const baseUrl = 'https://www.saucedemo.com/';

Before(async () => {
    this.browser = await chromium.launch({ headless: false });
    // this.browser = await firefox.launch({ headless: false });
    // this.browser = await webkit.launch({ headless: false });
    page = await this.browser.newPage();
    login = new Login(page);
    products = new Products(page);
});

After(async () => {
    await this.browser.close();
});

Given('I navigate to the login page', async function () {
    await page.goto(baseUrl);
});

When('I log in with {string} {string}', async function (username, password) {
    await login.loginAs(username, password);
});

Then('The products page will be displayed successfully', async function () {    
    await products.getPageHeader();
});

Then('The login page will display error {string}', async function (errorMessage) {    
    await login.getLoginErrorMessage(errorMessage);
});
