Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'))


import { faker } from '@faker-js/faker'

const randomName = faker.person.firstName();
const randomMail = faker.internet.email();

Cypress.Commands.add('VisitaTelaCadastro', () => {
    cy.visit('https://automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .click()
})

Cypress.Commands.add('LoginNovoUsuario', () => {
    cy.get('[data-qa="signup-name"]')
                .type(randomMail)

            cy.get('[data-qa="signup-email"]')
                .type(randomMail)

            cy.get('[data-qa="signup-button"]')
                .click()

                
})

export {randomMail};
export {randomName};