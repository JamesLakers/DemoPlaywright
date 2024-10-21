import { test, expect, request } from '@playwright/test';
import { Login } from '../pages/sauceDemo/login.cjs';
import { Products } from '../pages/sauceDemo/products.cjs';
let login;
let products;
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
    login = new Login(page);
    products = new Products(page);
});

test.afterEach(async ({ page }) => {
    page.close();
});

test(`Login failed as locked_out_user`, async () => {
    await login.loginAs('locked_out_user', password);
    await login.getLoginErrorMessage('Sorry, this user has been locked out.');
});

test(`Login failed with invalid password`, async () => {
    await login.loginAs('standard_user', 'invalid!');
    await login.getLoginErrorMessage('Username and password do not match any user in this service');
});

test(`Single Login successful as standard_user`, async () => {
    await login.loginAs('standard_user', password);
    await expect(products.pageHeader).toBeVisible();
});

const testCases = [
    { username: 'standard_user' },
    { username: 'problem_user' },
    { username: 'performance_glitch_user' },
    { username: 'error_user' },
    { username: 'visual_user' }
];
for (const { username } of testCases) {
    test(`Multiple Logins successful as ${username}`, async ({ page }) => {
        await login.loginAs(username, password);
        await expect(products.pageHeader).toBeVisible();
    })
};