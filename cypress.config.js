const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localhost:3000',  // Base URL for tests
    supportFile: 'cypress/support/e2e.js',  // Path to the support file
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    browser: 'chrome',
    specPattern: 'cypress/e2e/**_spec.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
