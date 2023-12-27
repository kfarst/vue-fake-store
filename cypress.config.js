const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    baseUrl: "http://localhost:1234",
    specPattern: "@/**/*.cy.js",
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
