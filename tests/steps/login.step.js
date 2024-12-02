import { Given, When, Then } from '@cucumber/cucumber';
import credentials from '../data/credentials.json' assert { type: 'json' };;

Given('I login successfully as {string} with password {string}', async function (username, password) {
    await this.pageFactory.login.loginAs(username, password);
    await this.pageFactory.products.pageHeader.isVisible();
});

Given('I attempt to login as {string} with password {string}', async function (username, password) {
    await this.pageFactory.login.loginAs(username, password);
});

Given('I login successfully using credentials from file', async function () {
    for (const login of credentials) {
        await this.pageFactory.login.loginAs(login.username, login.password);
        await this.pageFactory.products.pageHeader.isVisible();
    }
});

Then('The products page will be displayed successfully', async function () {    
    await this.pageFactory.products.pageHeader.isVisible();
});

Then('The login page will display error {string}', async function (errorMessage) {    
    await this.pageFactory.login.getLoginErrorMessage(errorMessage);
});
