const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    baseUrl: "https://www.anchorsoftacademy.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "defaultCommandTimeout": 500000,
    "pageLoadTimeout": 120000,
  },
});
