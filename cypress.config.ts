import { defineConfig } from "cypress";

// const { defineConfig } = require('cypress');

export default defineConfig({
  projectId: 'cznbat',
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    "reportTitle": "My test report",
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
  },
  videoCompression: 15,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout: 7000,
    "chromeWebSecurity": false,
    specPattern: 'cypress/e2e/**/*spec*.{js,ts}',
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },
  },
});

// export default defineConfig({
//   projectId: 'cznbat',
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     "reportTitle": "My test report",
//     "reportDir": "cypress/results",
//     "overwrite": false,
//     "html": false,
//     "json": true
//   },
//   videoCompression: 15
//   // e2e: {
//   //   baseUrl: 'https://www.saucedemo.com/',
//   //   defaultCommandTimeout: 7000,
//   //   "chromeWebSecurity": false,
//   //   setupNodeEvents(on, config) {
//   //     // implement node event listeners here
//   //   },
//   // },
// });
