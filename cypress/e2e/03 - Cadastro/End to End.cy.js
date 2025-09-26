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
		context.skip(`${++contexto} - End To End.`, () => 
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
					
					
					it('Preenche: Nome', () =>
					{
						
					});

					it('Preenche: Nome & CPF', () =>
					{
						
					});

					it(`${teste}.${++complemento} - Validar input Nome, CPF e Email`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido obrigatoriedade do preenchimento do cammpo
							
						cy.get('input[name="email"]')
							.should('be.visible')
							.and('have.value', '');
							cy.get('.button-success')
								.click();
								cy.get('.alert-error')
									.eq(0)
									.should('be.visible')
									.and('have.text','É necessário informar o email');
					
					});
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