Cypress.Commands.add('Hook_AcessaPaginaCadastro_P2', () => {
    cy.visit(Cypress.env("env2"));
        cy.get('[href="/signup"]')
            .click();
}); 

Cypress.Commands.add('ValidaPaginaCadastro_P2', () => {
    cy.url()
        .should('eq', 'https://petlov.vercel.app/signup');
        cy.get('h1')
            .should('be.visible')  
            .and('have.text', 'Cadastro de ponto de doação');
});