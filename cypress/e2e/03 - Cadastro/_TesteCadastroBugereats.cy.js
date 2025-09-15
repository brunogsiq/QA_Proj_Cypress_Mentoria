context('Tela de Cadastro - ', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => 
	{
		let complemento = 1;
		describe(`${cenario} - Validações Visuais.`, () => 
		{
			//Se houver
			beforeEach(() => {
				//cy.Hook_AcessaPaginaCadastro();
			});

			//Se houver
			afterEach(() => {
				cy.clearAllLocalStorage();
					cy.clearAllCookies();
						cy.clearAllSessionStorage();
			});

			it.only(`${teste}.${complemento} - teste`, () => 
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

	context(`${++contexto} - Regras de negócio.`, () => 
	{
		let complemento = 1;
		describe(`${++cenario} - Validações Comportamentais.`, () => 
		{
			beforeEach(() => {
				cy.Hook_AcessaPaginaCadastro();
			});

			afterEach(() => {
				cy.clearAllLocalStorage();
					cy.clearAllCookies();
						cy.clearAllSessionStorage();
			});

			describe('Campo Nome', () => {
				it(`${++teste}.${complemento} - Validar titulo principal`, () => 
				{
					//Dado que a pagina esta sendo visualizada

					//Quando validar o titulo principal

					//entao sistema de ve apresentar
					
					
				});

			
				it(`${teste}.${++complemento} - `, () => 
				{
						
				});
			});

			describe('xxx', () => {
				it(`${++teste}.${complemento} - `, () => 
				{
					
				});

			
				it(`${teste}.${++complemento} - `, () => 
				{
						
				});
			});

			describe('xxx', () => {
				it(`${++teste}.${complemento} - `, () => 
				{
					
				});

			
				it(`${teste}.${++complemento} - `, () => 
				{
						
				});
			});
		});
	});

	context(`${++contexto} - End To End.`, () => 
	{
		let complemento = 1;
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