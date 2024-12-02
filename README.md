# Demo Playwright
This repository contains UI and API automation tests created that target the specific functionalities of the **SauceDemo** and **Restful-Api** testing sites.  The test scripts are using **Playwright** and **Cucumber** frameworks written in **JavaScript** with the **Gherkin** syntax.

## Setup Instructions
1. Clone repository
2. Install package dependencies **npm install**
3. Set the **BASE_URL** and **BROWSER** values in the .env file for which test you want to run
4. Run tests using commands from package.json
- npm run api
- npm run login
- npm run login-negative
- npm run login-positive
- npm run end2end
  
## Urls to testing sites used
- https://www.saucedemo.com
- https://restful-api.dev (Web)
- https://api.restful-api.dev (API)
