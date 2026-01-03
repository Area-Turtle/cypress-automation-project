const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'http://localhost:3000',  // Base URL for tests
    supportFile: 'cypress/support/e2e.js',  // Path to the support file
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    experimentalNetworkStubbing: true, // Might help with network-related issues
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    browser: 'chrome',


    specPattern: ['**/**/LANDINGPAGE_spec.js',
                  '**/**/CUSTOMER_FEEDBACK_spec.js'
    ],
    env: {
      CYPRESS_VERIFY_SSL: false,  // Disables SSL verification
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
