// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Project configurations
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        // Additional options for Chromium, if needed
      },
    }//,
    // {
    //   name: 'Firefox',
    //   use: {
    //     browserName: 'firefox',
    //     // Additional options for Firefox, if needed
    //   },
    // },
    // {
    //   name: 'WebKit',  // For Safari-like tests
    //   use: {
    //     browserName: 'webkit',
    //     // Additional options for WebKit, if needed
    //   },
    // },
  ],

  // Global test settings
  use: {
    headless: false,  // Set to false if you want to see the browser while testing
    viewport: { width: 1280, height: 720 },  // Set default viewport size
    ignoreHTTPSErrors: true,  // Ignore HTTPS certificate errors
    screenshot: 'on',  // Take screenshots on failure
    video: 'retain-on-failure',  // Record video of the test if it fails
    trace: 'retain-on-failure',  // Collect trace on failure
  },

  // Test directory
  testDir: './tests',

  // Test retries
  retries: 0,  // Retry once if a test fails

  // Reporters
  reporter: [['list'], ['html', { outputFolder: 'test-report' }]],

  // Timeout for a single test
  timeout: 60000,  // 60 seconds

  // Parallelism settings
  workers: 1,  // One worker per project (browser)
});
