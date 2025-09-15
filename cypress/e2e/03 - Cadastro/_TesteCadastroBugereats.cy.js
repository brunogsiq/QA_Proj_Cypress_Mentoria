context('Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context('Tela Home', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
					cy.visit(Cypress.env('env3'));
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				it(`${teste}.${complemento} - Valida acesso ao projeto.`, () => 
				{
					cy.url()
						.should('be.equal', 'https://buger-eats-qa.vercel.app/');
				});

				it(`${teste}.${complemento} - Valida layout.`, () => 
				{
					//Dado que a tela home está sendo visualizada
					//Quando validar os elementos em tela
					cy.waitUntil(() =>
						cy.get('img')
							.should('be.visible')
					);

					/*Então o sistema deverá apresentar
						*Logotipo
						*Título
						*Sub-título
						*Botão
						*Background Imagem
					*/
					cy.get('img')
						.should('be.visible')
						.and('have.attr', 'alt', 'Buger Eats');

					cy.get('h1')
						.should('be.visible')
						.and('have.text', 'Seja um parceiro entregador pela Buger Eats')
						.and('have.css', 'color', 'rgb(50, 33, 83)');

					cy.get('p')
						.should('be.visible')
						.and('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
						.and('have.css', 'color', 'rgb(108, 108, 128)');

					cy.get('[href="/deliver"]')
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(52, 203, 121)');
						cy.get('span > svg')
							.should('be.visible');
						cy.get('strong')
							.should('be.visible')
							.and('have.text', 'Cadastre-se para fazer entregas')
							.and('have.css', 'color', 'rgb(255, 255, 255)');
				});
			});
		});

		context(`${++contexto} - Regras de negócio.`, () => 
		{
			let complemento = 1;
			describe(`${++cenario} - Validações Comportamentais.`, () => 
			{
				beforeEach(() => {
					cy.visit(Cypress.env('env3'))
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe('Campo Cadastre-se para fazer entregar', () => 
				{
					it(`${++teste}.${complemento} - Validar clique e direcionamento de tela.`, () => 
					{
						//Dadoq que foi realizado um evento de clique na opção Cadastre-se para fazer entrega
						cy.get('[href="/deliver"]')
							.click();

						//Quando o sistema carregar
						cy.waitUntil(() =>
							cy.get('h1')
								.should('be.visible')
						);
						
						//Então deverá direcionar para a tela de cadastro
						cy.url()
							.should('be.equal', 'https://buger-eats-qa.vercel.app/deliver')
							cy.get('h1')
								.should('be.visible')
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

	// Continuar a partir daqui
	context('Tela Cadastro', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
					cy.Hook_AcessaPaginaCadastro();
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe('Título', () =>
				{
					it('', () => 
					{
						
					});
				});

				describe('Campo Nome', () =>
				{
					it('', () => 
					{
						
					});
				});

				describe('Campo CPF', () =>
				{
					it('', () => 
					{
						
					});
				});

				describe('Campo E-mail', () =>
				{
					it('', () => 
					{
						
					});
				});

				describe('Campo Whatsapp', () =>
				{
					it('', () => 
					{
						
					});
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

				describe('Campo Nome', () =>
				{
					it('Validar inpuit - Letra', () => 
					{
						//Dado que preenchi com letras no nome
						cy.get('[name="fullName"]')
							.type('Nome Teste')
						
						//Quando realizar um evento de clique no botão de cadastrar
						cy.get('.button-success')
							.click();
						
						//Então o sistema deverá aceitar
						//Então o sistema não deverá obrigar preenchimento
						//Então o sistema não deverá apresentar alerta
						cy.get('.alert-error')
							.eq(0)
							.should('be.visible')
							.and('have.text', 'É necessário informar o CPF')
					});

					it('Validar inpuit - Numero', () => 
					{
						
					});

					it('Validar inpuit - Carac. Especial', () => 
					{
						
					});

					it('Validar inpuit - Combinação', () => 
					{
						
					});
				});

				describe('Campo CPF', () =>
				{
					it.only('Validar inpuit - Letra', () => 
					{
						cy.get('[name="cpf"]')
							.type('A')

						cy.get('.button-success')
							.click();
						
						//Então o sistema deverá aceitar
						//Então o sistema não deverá obrigar preenchimento
						//Então o sistema não deverá apresentar alerta
						cy.get('.alert-error')
							.eq(1)
							.should('be.visible')
							.and('have.text', 'Oops! CPF inválido')
					});
				});

				describe('Campo E-mail', () =>
				{
					it('', () => 
					{
						
					});
				});

				describe('Campo Whatsapp', () =>
				{
					it('', () => 
					{
						
					});
				});
			});
		});

		let complemento = 1;
		context(`${++contexto} - End To End.`, () => 
		{
			describe(`${++cenario} - Fluxos Funcionais`, () => 
			{
				beforeEach(() => {
					cy.Hook_AcessaPaginaCadastro();
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

					it('Preenche: Nome & CPF & E-mail', () =>
					{
						
					});
				});
			});
		});
	});
});