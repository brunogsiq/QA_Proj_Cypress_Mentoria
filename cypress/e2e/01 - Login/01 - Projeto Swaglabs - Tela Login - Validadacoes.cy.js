context('Projeto Swag Labs - Saucedemo', () => 
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
			
			it(`${teste}.${complemento} - Validar caracteristicas visuais da pagina de login`, () => //Primeiro teste V1
			{
				//<div class="form_group"><input class="input_error form_input" 
				// placeholder="Username" type="text" data-test="username" 
				// id="user-name" name="user-name" autocorrect="off" 
				// autocapitalize="none" value=""></div>
				
				//Dado que estou acessando o sistema Swag Labs
				//Quando estiver na tela de login 
				//Entao eu visualizo que:

				//Logo está sendo apresentada
				cy.get('.login_logo')
					.should('be.visible')
					.and('have.text','Swag Labs')

				//Campo user name
				cy.get('[data-test="username"]')
					.should('be.visible')
					.and('be.empty')
					.and('have.attr','placeholder', 'Username')
					.and('have.attr','type', 'text')
					.and('have.css', 'background-color', 'rgb(255, 255, 255)');
				
				//Campo password
				cy.get('[data-test="password"]')
					.should('be.visible')
					.and('be.empty')
					.and('have.attr','placeholder', 'Password')
					.and('have.attr','type', 'password')
					.and('have.css', 'background-color', 'rgb(255, 255, 255)');

				//Campo password
				cy.get('[data-test="login-button"]')
					.should('be.visible')
					.and('have.attr','type', 'submit')
					.and('have.css', 'background-color', 'rgb(61, 220, 145)');
				
				//caixa contendo usernames e Password aceitos
				cy.get('[data-test="login-credentials"]').should('be.visible');
				cy.get('[data-test="login-password"]').should('be.visible');
			});

			it(`${teste}.${++complemento} - Validar "Username" preenchido e "Password" vazio`, () => 
			{
				//Passo - Dado...
				
				//Passo - Quando...
				cy.get('[data-test="username"]')
					.type('Asdfssdf');
					cy.get('[data-test="login-button"]')
						.click();

					//Passo - Então...
					cy.get('[data-test="error"]')
						.should('have.text','Epic sadface: Password is required')
						.and('be.visible');
			});

			it(`${teste}.${++complemento} - Validar "Username" vazio e "Password" preenchido`, () => 
			{
				//Passo - Dado...
				
				//Passo - Quando...
				cy.get('[data-test="password"]')
					.type('12345');
					cy.get('[data-test="login-button"]')
						.click();

					//Passo - Então...
					cy.get('[data-test="error"]')
						.should('have.text','Epic sadface: Username is required')
						.and('be.visible');
			});
			
			it(`${teste}.${++complemento} - Validar "Username" e "Password" preenchidos incorretamente`, () => 
			{
				//Passo - Dado...
				
				//Passo - Quando...
				cy.get('[data-test="username"]')
					.type('Asdfssdf');
					cy.get('[data-test="password"]')
						.type('12345');
						cy.get('[data-test="login-button"]')
							.click();
				
				//Passo - Então...
				cy.get('[data-test="error"]')
					.should('have.text','Epic sadface: Username and password do not match any user in this service')
					.and('be.visible')
			});

			it(`${teste}.${++complemento} - Validar se Placeholder dos campos "Username" e "Password" estao sendo exibidos corretamente`, () => 
			{
				//Passo - Dado...
			
				//Passo - Quando...
				
				//Passo - Então...
				cy.get('[data-test="username"]')
					.should('be.visible')
					.and('have.attr', 'placeholder', 'Username');
					cy.get('[data-test="password"]')
						.should('be.visible')
						.and('have.attr', 'placeholder', 'Password');
			});

			it(`${teste}.${++complemento} - Validar se o botao de fechar o erro esta sendo exibido`, () => 
			{
				//Passo - Dado...
				cy.get('[data-test="login-button"]')
					.click();
					cy.get('[data-test="error-button"]')
						.should('be.visible');// visível na tela
				
				//Passo - Quando...
				cy.get('[data-test="error-button"]')    
    				.should('be.visible')
					.and('be.enabled'); // está habilitado
			});

			it(`${teste}.${++complemento} - Validar se o botao de fechar o erro está funcionando`, () => 
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

					
			});

			it(`${teste}.${++complemento} - Validar login com sucesso`, () => 
			{
				//Passo - Dado...
				cy.get('#user-name')
					.type('standard_user');
					cy.get('#password')
						.type('secret_sauce');					
								
				//Passo - Quando...
				cy.get('[data-test="login-button"]')
					.click();

				//Então
				cy.url()
					.should('eq', 'https://www.saucedemo.com/inventory.html');  // Valida URL
					cy.get('.inventory_list')
						.should('be.visible'); // Valida elemento da página
				

					
			});
		});
	});

	context.skip(`${++contexto} - Regras de negócio.`, () => 
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

	context.skip(`${++contexto} - End To End.`, () => 
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