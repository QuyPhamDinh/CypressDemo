
# CypressDemo
install Cypress : npm install cypress --save-dev

run on local : npx cypress run --spec cypress/e2e/spec_demo.cy.ts

run with specified browser  : npx cypress run --spec cypress/e2e/spec_demo.cy.ts --browser chrome

run on browser stack : browserstack-cypress run

# Integrate BrowserStack
npm i -g browserstack-cypress-cli
 browserstack-cypress run 
 browserstack-cypress run --sync --specs ./cypress/integration/spec_demo.cy.ts
 

# Parallel

Install
npm i cypress-parallel

Add a new script
In your package.json add a new script:

"scripts" :{
  ...
  "cy:run": "cypress run", // It can be any cypress command with any argument
  "cy:parallel" : "cypress-parallel -s cy:run -t 2 -d <your-cypress-specs-folder> -a '\"<your-cypress-cmd-args>\"'"
  ...
}

npm run cy:parallel
