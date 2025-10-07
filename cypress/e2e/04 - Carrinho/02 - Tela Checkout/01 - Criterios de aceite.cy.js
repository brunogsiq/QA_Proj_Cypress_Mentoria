context('Projeto - Star Bugs', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context('Tela Chekout', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
					cy.Hook_AcessaPaginaCheckout_P4()
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe(`${cenario} - Cabeçalho.`, () => {
					
					it(`${teste}.${complemento} - Validar acesso a pagina de checkout.`, () => 
					{
					//Dado que eu acesso o ssistema 'starbugs'
					//Quando digitar a url correpondente
					//Então eu valido que a tela de checkout é exibida
					cy.url()
						.should('be.equal', 'https://starbugs.vercel.app/checkout');
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

				describe(`${cenario} - Complete seu pedido.`, () => {
					
					it(`${teste}.${complemento} - Validar a mensagem Endereço de entrega Informe o endereço onde deseja receber seu pedido`, () => 
					{
					//Dado que estou na tela de checkout'
					//Quando estiver validando a sessão Complete seu pedido
					//Entao eu valido se a mensagem "Endereço de entrega Informe o endereço onde deseja receber seu pedido" está visível
					
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
			});
		});
	});
});