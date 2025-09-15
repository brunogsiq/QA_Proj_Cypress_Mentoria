context('nomeDaTela', () => {
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => {
		let complemento = 1;
		describe(`${cenario} - Validações Visuais.`, () => {
			//Se houver
			beforeEach(() => {
				//Executa antes de cada it
				cy.visit(Cypress.env("env2"));
					cy.get('.logo')
						.should('be.visible');
						cy.get('[href="/signup"]')
							.click();
								cy.validaPageCadastro();
			});

			//Se houver
			afterEach(() => {
				cy.clearAllLocalStorage();
					cy.clearAllCookies();
						cy.clearAllSessionStorage();
			});

			it(`${teste}.${complemento} - Validar se a tela de cadastro está sendo apresentada`, () => {
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				cy.validaPageCadastro()
			});

			it(`${teste}.${++complemento} - Validar botao "Voltar para home"`, () => {
				//Passo - Dado...
				cy.get('.button-register')
					.click();

				//Passo - Quando...
				cy.get('[href="/"]')
					.click();

				//Passo - Então...
				cy.url()
        			.should('eq', 'https://petlov.vercel.app/');
			});


			it(`${teste}.${++complemento} - Validar tentativa de cadastro com campos vazios`, () => {
				//Passo - Dado...
				
				//Passo - Quando...
				cy.get('.button-register')
					.click();

				//Passo - Então...
				cy.get('.alert-error')
					.should('contain', 'Informe o seu nome completo');
					cy.get('.alert-error').eq(1)
						.should('contain', 'Informe o seu melhor email');
						cy.get('.alert-error').eq(2)
							.should('contain', 'Informe o seu CEP');
							cy.get('.alert-error').eq(3)
								.should('contain', 'Informe um número maior que zero');
			});

			it(`${teste}.${++complemento} - Validar busca de CEP com o campo vazio`, () => {
				//Passo - Dado...
					
				//Passo - Quando...
				cy.get('input[name="cep"]')
					.should('have.value', '');
					cy.get('[type="button"]')
						.click();

				//Passo - Então...
				cy.get('.alert-error')
					.should('contain', 'Informe um CEP válido');

			});

			it(`${teste}.${++complemento} - Validar se o botao "Buscar Cep" altera para "Aguarde..." ao ser clicado `, () => {
				//Passo - Dado...

				//Passo - Quando...
				cy.get('input[name="cep"]')
					.should('have.value', '');
					cy.get('[type="button"]')
						.click();

				//Passo - Então...
				cy.get('[type="button"]')
					.should('have.value', 'Aguarde...')

			});

			it(`${teste}.${++complemento} - Validar busca por cep inválido`, () => {
				//Passo - Dado...

				//Passo - Quando...
				cy.get('input[name="cep"]')
					.type('234234');
					cy.get('[type="button"]')
						.click();

				//Passo - Então...
				cy.get('.alert-error')
					.should('have.text', 'Informe um CEP válido')
					.and('be.visible');
			});

			it(`${teste}.${++complemento} - Validar busca por cep válido`, () => {
				//Passo - Dado...

				//Passo - Quando...
				cy.get('input[name="cep"]')
					.type('38400402');
					cy.get('[type="button"]')
						.click();

				//Passo - Então...
				cy.get(':nth-child(3) > [type="text"]')
					.should('not.have.value', '');
			});

			it(`${teste}.${++complemento} - Validar se a seleção de animais está funcionando`, () => {
				//Passo - Dado...

				//Passo - Quando...
				cy.get('[alt="Gatos"]')
					.click()

				//Passo - Então...
				cy.get('.selected')
					.should('have.class', 'selected')	
					.and('have.css', 'border-right-color', 'rgb(52, 34, 88)');
			});

			it(`${teste}.${++complemento} - Validar cadastro com sucesso`, () => {
				cy.CadastroSucesso()
			});
		});
	});

	context(`${++contexto} - Regras de negócio.`, () => {
		let complemento = 1;
		describe(`${++cenario} - Validações Comportamentais.`, () => {
			//Se houver
			beforeEach(() => {
				//Executa antes de cada it
			});

			//Se houver
			afterEach(() => {
				//Executa depois de cada it
			});

			it(`${++teste}.${complemento} - `, () => {
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...

			});


			it(`${teste}.${++complemento} - `, () => {
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...

			});
		});
	});

	context(`${++contexto} - End To End.`, () => {
		let complemento = 1;
		describe(`${++cenario} - Fluxos Funcionais`, () => {
			//Se houver
			beforeEach(() => {
				//Executa antes de cada it
			});

			//Se houver
			afterEach(() => {
				//Executa depois de cada it
			});

			it(`${++teste}.${complemento} - `, () => {
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...

			});

			it(`${teste}.${++complemento} - `, () => {
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...

			});
		});
	});
});