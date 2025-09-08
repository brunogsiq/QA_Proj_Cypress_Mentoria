Este será o formato de nosso arquivo cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1300,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: 'cypress/report',
        overwrite: true,
        html: true,
        json: false,
        timestamp: 'dd-mm-yyyy_HH-MM-ss'
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        //Aqui ficarão todos os meus testes:
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
    env: {
        env1: "https://www.saucedemo.com/",
        env2: "https://petlov.vercel.app/",
        env3: "https://buger-eats-qa.vercel.app/",
        env4: "https://starbugs.vercel.app/",
        env5: "https://dev-finance.netlify.app/",
        env6: "https://parodify.vercel.app/",
    },
});

//No arquivo e2e, adicionar

Cypress.ElementSelector.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
})

if (Cypress.config("hideXHRInCommandLog"))
{
    const app = window.top;
    if ( app && !app.document.head.querySelector("[data-hide-command-log-request]"))
    {
        const style = app.document.createElement("style");
        style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");
        app.document.head.appendChild(style);
    }
};

//Em commands

Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'))