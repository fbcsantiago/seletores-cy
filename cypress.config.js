const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pthzhp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
