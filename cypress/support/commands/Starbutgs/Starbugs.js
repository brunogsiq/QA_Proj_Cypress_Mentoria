Cypress.Commands.add('Hook_AcessaPaginaCadastro_P4', () => {
    cy.visit(Cypress.env("env4"));
        cy.get('[href="/deliver"]')
            .click();
});

Cypress.Commands.add('Hook_AcessaPaginaCheckout_P4', () => {
    cy.visit('https://starbugs.vercel.app/')
					cy.get('.buy-coffee').eq(0)
						.click()
        
}); 

Cypress.Commands.add('ValidaPaginaCadastro_P4', () => {
    cy.url()
        .should('eq', '');
        cy.get('h1')
            .should('be.visible')  
            .and('have.text', 'Cadastro de ponto de doação');
});