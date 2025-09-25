context('Projeto - Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => 
	{
		let complemento = 1;
		
		context('Tela Home', () => 
		{
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				describe('', () => 
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

        context('Tela Cadastro', () => 
		{
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				describe('Dados', () => 
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

                    //campos nome, cpf,email, whats
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

                describe('Endereço', () => 
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

                    //campos ...
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

                describe('Metodo', () => 
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

                    //campos ...
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

            describe('Dados', () => {
                
            });

            describe('Endereço', () => {
                
            });

            describe('Metódo de entrega', () => {
                
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

			describe('preenchimento nome + incompleto', () => {
                
            });

            describe('preenchimento cpf + incompleto', () => {
                
            });

            describe('preenchimento email + incompleto', () => {
                
            });

            //...

            describe('preenchimento completo com sucesso', () => {
                
            });
		});
	});
});