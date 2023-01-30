// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// import './login.actions'

beforeEach(() =>{
    cy.visit('/')
})

// const { defineConfig } = require('cypress');
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('before:run', async (details) => {
//         console.log('override before:run');
//         await beforeRunHook(details);
//       });

//       on('after:run', async () => {
//         console.log('override after:run');
//         await afterRunHook();
//       });
//     },
//   },
// });
