import { expect } from '@playwright/test';
import 'dotenv/config';

class Login {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.userNameTextBox = this.page.locator('#user-name');
        this.passwordTextBox = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.loginErrorMessage = this.page.locator('h3[data-test="error"]');
    }
    
    async loginAs(username, password) {
        await this.page.goto(process.env.BASE_URL);
        await this.userNameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }

    async getLoginErrorMessage(expectedError) {
        return await expect(this.loginErrorMessage).toContainText(expectedError);
    }
}

export default Login;