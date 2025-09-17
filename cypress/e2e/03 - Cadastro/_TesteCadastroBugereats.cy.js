context('Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context.skip('Tela Home', () => 
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
						//Dado que foi realizado um evento de clique na opção Cadastre-se para fazer entrega
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
					it(`${teste}.${complemento} - Validar "título"`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido o campo titulo
						cy.get('h1')
							.should('be.visible')
							.and('contain.text', 'Cadastre-se para  fazer entregas')
							.and('have.css', 'color', 'rgb(50, 33, 83)');
					});
				});

				describe.only('Campo Nome', () =>
				{
					it(`${teste}.${complemento} - Validar se o campo "nome" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="fullName"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "nome" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="fullName"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "nome" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="fullName"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="fullName"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Nome completo');
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" está em foco`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo está em foco
							
						cy.get('input[name="fullName"]')
							.should('be.visible');
							cy.get('input[name="fullName"]').realHover()
								.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
					})

					it(`${teste}.${++complemento} - Validar que o campo "nome" deve estar preenchido pra prosseguir com o cadastro`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido obrigatoriedade do preenchimento do cammpo
							
						cy.get('input[name="fullName"]')
							.should('be.visible')
							.and('have.value', '');
							cy.get('.button-success')
								.click();
								cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error')
									.should('be.visible')
									.and('have.text','É necessário informar o nome');
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" aceita numeros`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros
							
						cy.get('input[name="fullName"]')
							.should('be.visible')
							.type('12345');
							cy.get('.button-success')
								.click();
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" aceita numeros e letras`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros e letras
							
						cy.get('input[name="fullName"]')
							.should('be.visible')
							.type('jose123d');
							cy.get('.button-success')
								.click();
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" aceita numeros, letras e caracteres especiais`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros, letras e caracteres especiais
							
						cy.get('input[name="fullName"]')
							.should('be.visible')
							.type('jose1!@#23d');
							cy.get('.button-success')
								.click();
					})

					it(`${teste}.${++complemento} - Validar campo nome preenchido e os campos, cpf, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo nome esta preenchido e os campos, cpf, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos
							
						cy.get('input[name="fullName"]')
							.should('be.visible')
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
				});

				//colar o describe do nome aqui e susbstituir pra cpf.
				describe('Campo CPF', () =>
				{it(`${teste}.${complemento} - Validar campo "CPF"`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está:
							/*
								visivel
								habilitado
								vazio
								placeholder correto
								campo está em foco
							*/
						cy.get('input[name="cpf"]')
							.should('be.visible')
								.and('be.enabled')
									.and('have.value', '')
										.and('have.attr', 'placeholder', 'CPF somente números');
										cy.get('input[name="cpf"]').realHover()
											.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)');
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
					it('Validar inpuit - Letra', () => 
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