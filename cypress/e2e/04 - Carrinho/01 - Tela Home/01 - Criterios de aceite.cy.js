//Projeto > tela > criterios de aceite
context('Projeto - Star Bugs', () => 
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
					cy.visit(Cypress.env('env4'));
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe(`${cenario} - Cabeçalho.`, () => {
					
					it(`${teste}.${complemento} - Validar acesso ao projeto.`, () => 
					{
					//Dado que eu acesso o ssistema 'starbugs'
					//Quando digitar a url correpondente
					//Então eu valido que a tela home é exibida
					cy.url()
						.should('be.equal', 'https://starbugs.vercel.app/');
					});

					it(`${teste}.${complemento} - Validar titulo`, () => 
					{
					//Dado que eu acesso o ssistema 'starbugs'
					//Quando estiver acessando a tela home
					cy.waitUntil(() =>
						cy.get('[src="/assets/logo.bd07c5b3.svg"]')
							.should('be.visible')
						);
					//Entao eu valido o titulo
						cy.get('[src="/assets/logo.bd07c5b3.svg"]')
							.should('be.visible')
					});

					it(`${teste}.${complemento} - Validar sub-titulo`, () => 
					{
					//Dado que eu acesso o ssistema 'starbugs'
					//Quando estiver acessando a tela home
					//Entao eu valido o sub-titulo

					//visivel
					cy.get('button.gocart > svg')
						//.find('svg')
      					.should('be.visible')
						//contem o texto especifico
						cy.get('button.gocart')
							.should('contain.text', 'Feito com')
							.and('contain.text', 'por Papito!')
							//SVG visivel, assegura que pegou o elemento certo mesmo tendo outros SVG	
							cy.get('button.gocart').within(() => {
									cy.get('svg')
									.should('be.visible');
									});
									//css
									cy.get('button.gocart')
										.should('be.visible')
										.and('have.css', 'display', 'flex')        // ex: inline-flex, flex, block, etc.
										.and('have.css', 'background-color', 'rgb(212, 233, 226)')  // cor do texto
										.and('have.css', 'color', 'rgb(30, 57, 50)') // cor de fundo
										.and('have.css', 'font-size','14px')        // tamanho da fonte
					});
				});

				describe(`${cenario} - Seçao 01 - Banner.`, () => {
					it(`${teste}.${complemento} - Validar titulo`, () => 
					{
					//Dado que estou na tela home
					//Quando visualizar o banner
					cy.get('section >h1.mrPjC')
					//Entao eu valido o titulo
						.should('be.visible')
						.and('have.text','Bora tomar um café? Nós levamos até você! ')
					});

					it(`${teste}.${complemento} - Validar sub-titulo`, () => 
					{
					//Dado que estou na tela home
					//Quando visualizar o banner
					cy.get('h3.subtitle')
					//Entao eu valido o sub-titulo
						.should('be.visible')
						.and('have.text','O melhor café de são paulo, porque bug somente no nome.')
					});

					it(`${teste}.${complemento} - Validar informações`, () => 
					{
					//Dado que estou na tela home
					//Quando visualizar o banner
					cy.get('.sc-kgTSHT')
						.should('be.visible')
					//Entao eu valido as informações
					//Frase 1
					cy.get('.sc-iveFHk > :nth-child(1)')
						.should('be.visible')
						.and('have.text','Pague somente na entrega')
						.find('svg')
						.and('be.visible');
							//Frase 2
							cy.get('.sc-iveFHk > :nth-child(2)')
								.should('be.visible')
								.and('have.text','Embalagens reutilizáveis')
								.find('svg')
								.and('be.visible');
									//Frase 3
									cy.get('.sc-iveFHk > :nth-child(3)')
										.should('be.visible')
										.and('have.text','Entrega rápida e sustentável')
										.find('svg')
										.and('be.visible');
										//Frase 3
										cy.get('.sc-iveFHk > :nth-child(4)')
											.should('be.visible')
											.and('have.text','Cafés orgânicos e moídos na hora')
											.find('svg')
											.and('be.visible');
					});

					it(`${teste}.${complemento} - Validar imagem do lado direito`, () => 
					{
					//Dado que estou na tela home
					//Quando visualizar o banner
					cy.get('.hero')
					//Entao eu valido a imagem da empresa sendo mostrada do lado direito
						.should('be.visible')
					});

					
				});

				describe(`${cenario} - Seção 02 - Produtos mais vendidos.`, () => {
					
				});
			});
		});
	});
});