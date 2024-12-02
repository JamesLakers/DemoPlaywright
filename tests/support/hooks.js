import { Before, After, setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, firefox, webkit, devices } from '@playwright/test';
import PageFactory from '../../pages/pageFactory.js';
import RestExample from '../../services/restExample.js';
import Screenshots from './screenshots.js';
import 'dotenv/config';
let emulator;
let context;

class CustomWorld {
  constructor({ attach }) {
    this.attach = attach;
    this.screenshots = new Screenshots();
  }
}

setDefaultTimeout(15000);
setWorldConstructor(CustomWorld);

Before(async function (scenario) {
  if (process.env.BASE_URL === 'https://api.restful-api.dev') {
    return this.restExample = new RestExample();
  }

  else{    
  //Enable when running locally
  //this.screenshots.deleteScreenshots();
    
    switch (process.env.BROWSER) {
        case 'firefox':
            this.browser = await firefox.launch({ headless: true });
            this.page = await this.browser.newPage(); 
            break;
        case 'webkit':
            this.browser = await webkit.launch({ headless: true });
            this.page = await this.browser.newPage(); 
            break;
        case 'iPhone 15 Pro Max':
          this.browser = await chromium.launch({ headless: true });
          emulator = devices['iPhone 15 Pro Max'];
          context = await this.browser.newContext(emulator);
          this.page = await context.newPage();
          break;
        case 'Pixel 7':
          this.browser = await chromium.launch({ headless: true });
          emulator = devices['Pixel 7'];
          context = await this.browser.newContext(emulator);
          this.page = await context.newPage();
          break;
        default:
          this.browser = await chromium.launch({ headless: true });
          this.page = await this.browser.newPage();
          break;
    }   
    return this.pageFactory = new PageFactory(this.page);
  }

});

After(async function (scenario) {
  if (process.env.BASE_URL === 'https://api.restful-api.dev') {
    await this.restExample.dispose();
  }

  else{
    await this.screenshots.createSreenshotOnFailure(scenario, this);
    await this.page.close();
    await this.browser.close();
  }
});