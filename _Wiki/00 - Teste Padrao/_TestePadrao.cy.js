context('Projeto - ...', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => 
	{
		let complemento = 1;
		
		context('Nome tela', () => 
		{
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				describe('Nome do campo', () => 
				{
					//Se houver
					beforeEach(() => {
						//Executa antes de cada it
						cy.visit(Cypress.env("env1"));
					});

					//Se houver
					afterEach(() => {
						//Executa depois de cada it
					});

					it(`${teste}.${complemento} - `, () => 
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
	});

	//verificar
	context(`${++contexto} - Regras de negócio.`, () => 
	{
		let complemento = 1;
		describe(`${++cenario} - Validações Comportamentais.`, () => 
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

	//verificar
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