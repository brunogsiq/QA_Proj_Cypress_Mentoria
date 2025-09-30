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

				describe.only(`${cenario} - Cabeçalho.`, () => {
					
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
					//Entao eu valido o titulo
					cy.waitUntil(() =>
						cy.get('[src="/assets/logo.bd07c5b3.svg"]')
							.should('be.visible')
					);

					
					
					
				});
				});

				describe(`${cenario} - Seçao 01 - Banner.`, () => {
					
				});

				describe(`${cenario} - Seção 02 - Produtos mais vendidos.`, () => {
					
				});

				it(`${teste}.${complemento} - Valida layout`, () => 
				{
					//Dado que eu acesso o ssistema 'starbugs'
					//Quando estiver acessando a tela home
					cy.waitUntil(() =>
						cy.get('[src="/assets/logo.bd07c5b3.svg"]')
							.should('be.visible')
					);

					/*Então o sistema deverá apresentar
						*Logotipo
						*Título
						*Sub-título lado direito
						*Slogan da pagina
						*imagem lado direito
						*Avisos
						*Produtos mais vendidos
						*cesta de produtos
							-Img do produto
							-Descrição
							-Preço
							-Botao comprar
					*/
					cy.get('.sc-dkrFOg')
						.should('be.visible')
						//.and('have.text','Feito com ')
						.and('have.css', 'background-color', 'rgb(212, 233, 226)')
						cy.get('h1')
							.should('be.visible')
							.and('contain.text', 'Bora tomar um café?')
							.and('contain.text', 'Nós levamos até você!');
					
					
				});
			});
		});
	});

	
});