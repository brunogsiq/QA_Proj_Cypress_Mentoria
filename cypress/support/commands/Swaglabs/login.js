import { telaSwagLabs_login } from "../../pages/elementos.js";

const TelaLogin = new telaSwagLabs_login();

Cypress.Commands.add("validaAcessoProjeto", () => 
{
    //cy.visit('/') - se configurado como base URL
    //cy.visit('https://www.saucedemo.com/') - mais comum
    //cy.visit(Cypress.env('env1'))

    //cy.get('.login_logo')
    TelaLogin.titulo
        .should('be.visible');
});