const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',  // for HTML reports
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true, 
    inlineAssets: true,
  },
  e2e: {
    baseUrl: "https://www.anchorsoftacademy.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);// for HTML reports
    },
    "defaultCommandTimeout": 500000,
    "pageLoadTimeout": 120000,
  },
});
