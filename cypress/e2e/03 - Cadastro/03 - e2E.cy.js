context('Projeto - Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context.skip('Tela Home', () => 
	{
		let complemento = 1;
		context.skip(`${++contexto} - End To End.`, () => 
		{
			describe(`${++cenario} - Fluxos Funcionais`, () => 
			{
				//Se houver
				beforeEach(() => {
					//Executa antes de cada it
				});

				//Se houver
				afterEach(() => {
					//Executa depois de cada it
				});

				it(`${++teste}.${complemento} - `, () => 
				{
					//Passo - Dado...

					//Passo - Quando...

					//Passo - Então...
					
				});

				it(`${teste}.${++complemento} - `, () => 
				{
					//Passo - Dado...

					//Passo - Quando...

					//Passo - Então...
					
				});
			});
		});
	});

	context('Tela Cadastro', () => 
	{
		let complemento = 1;
		context(`${++contexto} - End To End.`, () => 
		{
			describe(`${++cenario} - Fluxos Funcionais`, () => 
			{
				beforeEach(() => {
					cy.Hook_AcessaPaginaCadastro_P3();
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe('Validar cadastro incompleto', () => {
					
					it(`${teste}.${++complemento} - Validar preencimento Nome`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo nome esta preenchido e os campos, cpf, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos
							
						cy.get('input[name="fullName"]')
							.type('Jose da Silva');
							cy.get('.button-success')
								.click();
								cy.get(':nth-child(2) > :nth-child(2) > .alert-error')
									.should('be.visible')
									.and('have.text','É necessário informar o CPF');
								cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
									.should('be.visible')
									.and('have.text','É necessário informar o email');
									cy.get(':nth-child(2) > :nth-child(1) > .alert-error')
										.should('be.visible')
										.and('have.text','É necessário informar o CEP');
										cy.get(':nth-child(4) > :nth-child(1) > .alert-error')
											.should('be.visible')
											.and('have.text','É necessário informar o número do endereço');
										cy.get(':nth-child(4) > .alert-error')
											.should('be.visible')
											.and('have.text','Selecione o método de entrega');
											cy.get('form > :nth-child(6)')
												.should('be.visible')
												.and('have.text','Adicione uma foto da sua CNH');
					})

					it(`${teste}.${++complemento} - Validar preencimento Nome + CPF`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo nome esta preenchido e os campos, cpf, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos
							
						cy.get('input[name="fullName"]')
							.type('Jose da Silva');
							cy.get('.button-success')
							cy.get('input[name="cpf"]')
							.type('04330190636');
							cy.get('.button-success')
								.click();
								cy.get('.alert-error').eq(0)
									.should('be.exist')
									.and('have.text','É necessário informar o email');
									cy.get('.alert-error').eq(1)
										.should('be.visible')
										.and('have.text','É necessário informar o CEP');
										cy.get('.alert-error').eq(2)
											.should('be.visible')
											.and('have.text','É necessário informar o número do endereço');
										cy.get('.alert-error').eq(3)
											.should('be.visible')
											.and('have.text','Selecione o método de entrega');
											cy.get('.alert-error').eq(4)
												.should('be.visible')
												.and('have.text','Adicione uma foto da sua CNH');
					})

					it(`${teste}.${++complemento} - Validar preencimento Nome + CPF + e-mail`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se os campos estão preenchidos
							
						cy.get('input[name="fullName"]')
							.type('Jose da Silva');
						cy.get('input[name="cpf"]')
							.type('04330190636');
						cy.get('input[name="email"]')
							.type('teste@gmail.com');
						cy.get('.button-success')
							.click();
							cy.get('.alert-error').eq(0)
								.should('be.visible')
								.and('have.text','É necessário informar o CEP');
							cy.get('.alert-error').eq(1)
								.should('be.visible')
								.and('have.text','É necessário informar o número do endereço');
							cy.get('.alert-error').eq(2)
								.should('be.visible')
								.and('have.text','Selecione o método de entrega');
								cy.get('.alert-error').eq(3)
									.should('be.visible')
									.and('have.text','Adicione uma foto da sua CNH');
					})

					it(`${teste}.${++complemento} - Validar preencimento Nome + CPF + e-mail + CEP`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se os campos estão preenchidos
							
						cy.get('input[name="fullName"]')
							.type('Jose da Silva');
						cy.get('input[name="cpf"]')
							.type('04330190636');
						cy.get('input[name="email"]')
							.type('teste@gmail.com');
						cy.get('input[name="postalcode"]')
							.type('38400402');
						cy.get('[type="button"]')
							.click();
						cy.get('.button-success')
							.click();
							cy.get('.alert-error').eq(0)
								.should('be.visible')
								.and('have.text','É necessário informar o número do endereço');
							cy.get('.alert-error').eq(1)
								.should('be.visible')
								.and('have.text','Selecione o método de entrega');
								cy.get('.alert-error').eq(2)
									.should('be.visible')
									.and('have.text','Adicione uma foto da sua CNH');
					})

					it(`${teste}.${++complemento} - Validar preencimento Nome + CPF + e-mail + CEP + Metodo de entrega`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se os campos estão preenchidos
							
						cy.get('input[name="fullName"]')
							.type('Jose da Silva');
						cy.get('input[name="cpf"]')
							.type('04330190636');
						cy.get('input[name="email"]')
							.type('teste@gmail.com');
						cy.get('input[name="postalcode"]')
							.type('38400402');
						cy.get('[type="button"]')
							.click();
						cy.get('input[name="address-number"]')
							.type('10');
						cy.get('.delivery-method > :nth-child(1)')
							.click();
						cy.get('.button-success')
							.click();
								cy.get('.alert-error').eq(0)
									.should('be.visible')
									.and('have.text','Adicione uma foto da sua CNH');
					})

					it(`${teste}.${++complemento} - Validar cadastro com sucesso`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//E preencher todos os dados corretamente
						//E clico no botao Cadastre-se para fazer entregas
						//Entã eu valido que deverá aparecer a mensagem de sucesso 'Ai sim'
						//E clico no botão fechar
						//E volto para paguina home
							
						cy.get('input[name="fullName"]')
							.type('Jose da Silva');
						cy.get('input[name="cpf"]')
							.type('04330190636');
						cy.get('input[name="email"]')
							.type('teste@gmail.com');
						cy.get('input[name="postalcode"]')
							.type('38400402');
						cy.get('[type="button"]')
							.click();
						cy.get('input[name="address-number"]')
							.type('10');
						cy.get('.delivery-method > :nth-child(1)')
							.click();
						cy.get('.dropzone input[type="file"]')
							.attachFile('/' + 'cnh.jpeg')
						cy.get('.button-success')
							.click();
							cy.get('#swal2-title')
								.should('be.visible')
								.and('have.text','Aí Sim...');
								cy.get('.swal2-confirm')
									.click();
									cy.url()
        								.should('eq', 'https://buger-eats-qa.vercel.app/');
					})
				});
			});
		});
	});
});

/*
	contexto será:
		Projeto - ...
			Critério de aceite
				Nome tela
			Regra de negócio
				Nome tela
			E2E
				Nome tela

	describes será:
		Validações visuais
		validações comportamentais
		Fluxo funcionais

	describe dentro de describe será:
		dentro de Validação comportamental
			Campo nome
			Campo cpf
			campo...
*/