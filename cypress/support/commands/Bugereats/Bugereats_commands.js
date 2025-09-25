Cypress.Commands.add('Hook_AcessaPaginaCadastro_P3', () => {
    cy.visit(Cypress.env("env3"));
        cy.get('[href="/deliver"]')
            .click();
}); 

Cypress.Commands.add('ValidaPaginaCadastro_P3', () => {
    cy.url()
        .should('eq', 'https://buger-eats-qa.vercel.app/deliver');
        cy.get('h1')
            .should('be.visible')  
            .and('have.text', 'Cadastro de ponto de doação');
});