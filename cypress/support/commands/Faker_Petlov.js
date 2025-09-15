
import { faker } from '@faker-js/faker'

const randomName = faker.person.firstName();
const randomMail = faker.internet.email();

Cypress.Commands.add('CadastroSucesso',() => {

cy.get('h1')
					.should('have.text', 'Cadastro de ponto de doação')
                	.and('be.visible')
				//Passo - Quando...
				cy.get(':nth-child(2) > :nth-child(2) > .field > [type="text"]')	
					.type(randomName)
				cy.get('form > :nth-child(2) > :nth-child(3) > .field > [type="text"]')
					.type(randomMail)
				cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > [type="text"]')
					.type('38400402')
				cy.get('[type="button"]')
					.click()
				cy.get('[type="number"]')
					.type('123')
				cy.get('[alt="Gatos"]')
					.click()
				cy.get('.button-register')
					.click()				

				//Passo - Então...
				cy.url()
					.should('eq', 'https://petlov.vercel.app/success');  // Valida URL
				cy.get('h1')
					.should('have.text', 'Você fez a diferença!')
                	.and('be.visible')

})