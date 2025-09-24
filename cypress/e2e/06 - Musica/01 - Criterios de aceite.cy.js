context('nomeDaTela', () => 
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