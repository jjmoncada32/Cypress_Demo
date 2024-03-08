const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bwc4r8",
  video:true,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/Integration/Examples/*.js"
  },
});
