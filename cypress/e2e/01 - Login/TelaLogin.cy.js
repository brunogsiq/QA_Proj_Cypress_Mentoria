context('Tela Login', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => 
	{
		let complemento = 1;
		describe(`${cenario} - Validações Visuais.`, () => 
		{
			beforeEach(() => {
				cy.visit(Cypress.env("env1"));

				cy.get('.login_logo')
					.should('be.visible');
			});

			afterEach(() => {
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});
			
			it(`${teste}.${complemento} - Validar Campos Vazios`, () => //Primeiro teste V1
			{
				//Passo - Dado...
				cy.get('.login_logo')
					.should('be.visible');// o que está estranho ou desnecessário?
				//Passo - Quando...
				cy.get('#user-name')
					.should('be.empty');
				cy.get('#password')
					.should('be.empty');					
				cy.get('[data-test="login-button"]')
					.click()
				//Passo - Então...
				cy.get('[data-test="error"]')
					.should('have.text','Epic sadface: Username is required')//
					.and('be.visible')

				//Como falamos de testes front, eu costumo primeiro validar que é visível .should('be.visible'), depois .and('alguma coisa')
			});

			it(`${teste}.${++complemento} - Validar "Username" preenchido e "Password" vazio`, () => 
			{
				//Passo - Dado...
				cy.get('.login_logo')
					.should('be.visible');// o que está estranho ou desnecessário?
				//Passo - Quando...
				cy.get('[data-test="username"]')
					.type('Asdfssdf')
				cy.get('[data-test="login-button"]')
					.click()
				//Passo - Então...
				cy.get('[data-test="error"]')
					.should('have.text','Epic sadface: Password is required')
					.and('be.visible')	
					
				//atentar-se ao nomes dos testes
				//atentar-se ao padrão dos testes com ;
			});

			it(`${teste}.${++complemento} - Validar "Password" preenchido e "Username" vazio`, () => 
			{
				//Passo - Dado...
				cy.get('.login_logo')
					.should('be.visible');// o que está estranho ou desnecessário?
				//Passo - Quando...
				cy.get('[data-test="password"]')
					.type('12345')
				cy.get('[data-test="login-button"]')
					.click()
				//Passo - Então...
				cy.get('[data-test="error"]')
					.should('have.text','Epic sadface: Username is required')
					.and('be.visible')
					
				//atentar-se ao nomes dos testes
				//atentar-se ao padrão dos testes com ;
			});
			
			it(`${teste}.${++complemento} - Validar "Password" e "Username" preenchidos incorretamente`, () => 
			{
				//Passo - Dado...
				cy.get('.login_logo')
					.should('be.visible');// o que está estranho ou desnecessário?
				//Passo - Quando...
				cy.get('[data-test="username"]')
					.type('Asdfssdf')
				cy.get('[data-test="password"]')
					.type('12345')
				cy.get('[data-test="login-button"]')
					.click()
				//Passo - Então...
				cy.get('[data-test="error"]')
					.should('have.text','Epic sadface: Username and password do not match any user in this service')
					.and('be.visible')
					
					//atentar-se ao nomes dos testes
				//atentar-se ao padrão dos testes com ;
				//trabalhar com sistema de escada para cada fluxo
				//
					//
						//
							//

				//
					//
						//

				//
					//
			});

			it(`${teste}.${++complemento} - Validar Placeholder dos "Username" e "Password" sendo exibidos corretamente`, () => 
			{
				//Passo - Dado...
				cy.get('.login_logo')
					.should('be.visible');// o que está estranho ou desnecessário?
				//Passo - Quando...
				
				//Passo - Então...
				cy.get('[data-test="username"]')
					.should('be.visible')
					.and('have.attr', 'placeholder', 'Username');

				cy.get('[data-test="password"]')
					.should('be.visible')
					.and('have.attr', 'placeholder', 'Password');
					
				//Caso queira ver o valor do placeholder durante o teste (útil para debug):
				/*
				cy.get('#user-name')
					.invoke('attr', 'placeholder')
					.then(placeholder => {
				cy.log('Placeholder do usuário:', placeholder);
				});

				*/

				//Por questões de boas práticas, vamos evitar "comentários como o acima no projeto"

				//este teste poderá copiar para seu projeto pessoal de dicas
			});

			it(`${teste}.${++complemento} - Validar se o botao de fechar o erro esta sendo exibido`, () => 
			{
				//Passo - Dado...
				cy.get('[data-test="login-button"]')
					.click()
				cy.get('[data-test="error-button"]')
    				.should('be.visible');// visível na tela
				
				//Passo - Quando...
				cy.get('[data-test="error-button"]')    
    				.should('be.visible')
					.and('be.enabled') // está habilitado
			});

			it(`${teste}.${++complemento} - Validar se o botao de fechar o erro funciona`, () => 
			{
				//Passo - Dado...
				cy.get('[data-test="login-button"]')
					.click()
				cy.get('[data-test="error-button"]')
    				.should('be.visible');// visível na tela
				
				//Passo - Quando...
				cy.get('[data-test="error-button"]')    
    				.should('be.visible')
					.and('be.enabled') // está habilitado

				//Então
				cy.get('[data-test="error-button"]')
					.click()

					//atentar-se ao nomes dos testes
				//atentar-se ao padrão dos testes com ;
			});

			it(`${teste}.${++complemento} - Validar login com sucesso`, () => 
			{
				//Passo - Dado...
				cy.get('#user-name')
					.type('standard_user')
				cy.get('#password')
					.type('secret_sauce')					
								
				//Passo - Quando...
				cy.get('[data-test="login-button"]')
					.click()

				//Então
								
				cy.url()
					.should('eq', 'https://www.saucedemo.com/inventory.html');  // Valida URL
				cy.get('.inventory_list')
					.should('be.visible'); // Valida elemento da página
				

					//atentar-se ao nomes dos testes
				//atentar-se ao padrão dos testes com ;
				//trabalhar com sistema de escada para cada fluxo
			});
		});
	});

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