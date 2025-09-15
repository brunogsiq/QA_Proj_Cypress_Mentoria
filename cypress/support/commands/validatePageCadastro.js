Cypress.Commands.add('validaPageCadastro', () => {

    cy.url()
        .should('eq', 'https://petlov.vercel.app/signup');  // Valida URL
        cy.get('h1')
            .should('have.text', 'Cadastro de ponto de doação')
            .and('be.visible');
})