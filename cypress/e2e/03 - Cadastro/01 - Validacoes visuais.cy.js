context('Projeto - Buger Eats', () => 
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
	});

	context('Tela Cadastro', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe.only(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
					cy.Hook_AcessaPaginaCadastro_P3();
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

				describe('Campo Nome', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "nome" está visível`, () =>
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

					
				});

				describe('Campo CPF', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "cpf" está visível`, () =>
					{
						//Passo - Dado que estou logado no sistema Bugger eat
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="cpf"]')
							.should('be.visible');
					});

					//avaliar
					it(`${teste}.${++complemento} - Validar caracteristicas do campo`, () =>
					{
						//Passo - Dado que estou logado no sistema Bugger eat
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="cpf"]')
							.should('be.visible')
							.and('have.attr','type', 'text')
							.and('have.attr','name', 'cpf')
							.and('have.attr','placeholder', 'CPF somente números')
							.and('have.css','color','rgb(108, 108, 128)')
							.and('be.empty')
							.and('be.enabled')
							//and('')//<input type="text" name="cpf" placeholder="CPF somente números">
					});

					it(`${teste}.${++complemento} - Validar se o campo "cpf" está habilitado`, () =>
					{
						//Passo - Dado estou na tela de cadastro
						//Passo - Quando verifico o campo cpf 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="cpf"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "cpf" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou na tela de cadastro
						//Passo - Quando verifico o campo cpf 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="cpf"]')
							.should('have.value', '');

						cy.get('input[name="cpf"]')
							.should('be.empty');

						cy.get('input[name="cpf"]')
						.type('123')

						cy.get('input[name="cpf"]')
						.clear()
						.should('be.empty')

					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" está com placeholder correto`, () =>
					{
						//Passo - Dado estou na tela de cadastro
						//Passo - Quando verifico o campo cpf 
						//Passo - Então eu valido se campo está com placeholder correto
						cy.get('input[name="cpf"]')
							.should('have.attr', 'placeholder', 'CPF somente números');
					})
				});

				describe('Campo email', () =>
				{
					complemento = 1;
					
					//avaliar
					it(`${++teste}.${complemento} - Validar caracteristicas do campo`, () =>
					{
						//Passo - Dado que estou logado no sistema Bugger eat
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="email"]')
							.should('be.visible')
							.and('have.attr','name', 'email')
							.and('have.attr','placeholder', 'E-mail')
							.and('have.css','color','rgb(108, 108, 128)')
							.and('be.empty')
							.and('be.enabled')
					});

					it(`${teste}.${++complemento} - Validar se o campo "email" está em foco`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo email
						cy.get('input[name="email"]')
						//E coloco o mouse no campo
							.realHover()
						//Então eu valido se campo está em foco
								.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-top-color', 'rgb(52, 203, 121)');
					})

					it(`${teste}.${++complemento} - Validar que o campo "email" foi preenchido com um email inválido`, () =>
					{
						//Dado que inseri um email imvalido
						cy.get('input[name="email"]')
							.type('12345678');

						//Quando clico no botão 'Cadastre-se para fazer entregas'
						cy.get('.button-success')
							.click();

						//Entao deve ser apresentado a mensagem 'Oops! Email com formato inválido.' logo abaixo do campo
						cy.get('.alert-error').eq(2)
							.should('have.text','Oops! Email com formato inválido.');
					})

					it(`${teste}.${++complemento} - Validar que o campo "email" foi preenchido com um email válido`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo email
						cy.get('input[name="email"]')
						//E digito um email valido
							.type('teste@gmail.com');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao o campo deve ser apresentado sem nenhuma mensagem de erro abaixo
									cy.get('input[name="email"]')
										.parent()
										.find('.alert-error')
										.should('not.exist')
						//E deve estar preenchido com o nome valido digitado
										cy.get('input[name="email"]')
											.and('have.value','teste@gmail.com')
					})

					it(`${teste}.${++complemento} - Validar campo email preenchido e os campos, nome, cpf, cep, numero, metodo de entrega e CNH nao preenchidos`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo email
						cy.get('input[name="email"]')
						//E digito um email válido e o restantes dos campos em branco
							.type('teste@gmail.com');
						//E clico no botao Cadastre-se para fazer entregas
							cy.get('.button-success')
								.click();
						//Entao deve ser apresentado os erros para preencher os campos vazios						
								cy.get('.alert-error').eq(0)
									.should('be.visible')
									.and('have.text','É necessário informar o nome');
									cy.get('.alert-error').eq(1)
										.should('be.visible')
										.and('have.text','É necessário informar o CPF');
											cy.get('.alert-error').eq(2)
												.should('be.visible')
												.and('have.text', 'É necessário informar o CEP');
												cy.get('.alert-error').eq(3)
													.should('be.visible')
													.and('have.text', 'É necessário informar o número do endereço');
													cy.get('.alert-error').eq(4)
														.should('be.visible')
														.and('have.text', 'Selecione o método de entrega');
														cy.get('.alert-error').eq(5)
															.should('be.visible')
															.and('have.text', 'Adicione uma foto da sua CNH');
					})
				});

				describe('Campo whatsapp', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "whatsapp" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="whatsapp"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="whatsapp"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="whatsapp"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="whatsapp"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Whatsapp');
					})

					
				});

				describe('Campo cep', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "cep" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="postalcode"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "cep" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="postalcode"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "cep" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="postalcode"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "cep" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="postalcode"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'CEP');
					})
				});

				describe('Botao cep', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o botao está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o botao está visível
						cy.get('[type="button"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o botao está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o botao está habilitado
						cy.get('[type="button"]')
							.should('be.enabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o nome do botao está correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o nome do botao esta correto
						cy.get('[type="button"]')
							.and('have.value','Buscar CEP');
					})

					it(`${teste}.${++complemento} - Validar se a proriedade do botao está correta`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[type="button"]')
								.and('have.attr', 'type', 'button');
					})
				});

				describe('Campo rua', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "rua" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('[name=address]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "rua" está desabilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está desabilidado
						cy.get('[name=address]')
							.should('be.disabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o campo "rua" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[name=address]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Rua');
					})
				});

				describe('Campo numero', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "numero" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="address-number"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "numero" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="address-number"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "numero" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="address-number"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "numero" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="address-number"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Número');
					})
				});

				describe('Campo complemento', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "complemento" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="address-details"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "complemento" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="address-details"]')
								.should('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "complemento" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="address-details"]')
								.should('have.attr', 'placeholder', 'Complemento');
					})
				});

				describe('Campo bairro', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "bairro" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('[name=district]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "bairro" está desabilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está desabilidado
						cy.get('[name=district]')
							.should('be.disabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o campo "bairro" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[name=district]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Bairro');
					})
				});

				describe('Campo Cidade-UF', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "Cidade-UF" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('[name=city-uf]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "Cidade-UF" está desabilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está desabilidado
						cy.get('[name=city-uf]')
							.should('be.disabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o campo "Cidade-UF" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[name=city-uf]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Cidade/UF');
					})
				});

				describe('Método de entrega', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o titulo e subtitulo do campo estao visíveis`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se titudo do campo está visível
						cy.get('[role="legend"] h2').eq(2)
							.should('be.visible')
							.and('have.text','Método de entrega')
							cy.get('[role="legend"] span')
								.should('be.visible')
								.and('contain','Escolha um dos métodos abaixo')
					});

					it.only(`${teste}.${++complemento} - Validar se as imagens dos veiculos estao sendo mostradas corretamente`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se as imagens estao sendo mostradas corretamente
						cy.get('li > img').eq(0)
							.should('be.visible')
							.and('have.attr', 'src')
  							.and('include', '/moto');
							cy.get('li > img').eq(1)	
								.should('be.visible')
								.and('have.attr', 'src')
								.and('include', '/bike');
								cy.get('li > img').eq(2)
									.should('be.visible')
									.and('have.attr', 'src')
									.and('include', '/van');
					});

					it(`${teste}.${++complemento} - Validar se as propriedades de acessibilidade estao condizentes com a imagem`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se as imagens estao sendo mostradas corretamente
						cy.get('.delivery-method img').then(($imgs) => {
							expect($imgs[0]).to.have.attr('alt', 'Moto')
							expect($imgs[1]).to.have.attr('alt', 'Bike Elétrica')
							expect($imgs[2]).to.have.attr('alt', 'Van/Carro')
						});
					});

					it(`${teste}.${++complemento} - Validar se o campo para carregar CNH esta visivel`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo para carregar CNH esta visivel
						cy.get('.dropzone')
							.should('be.visible')
							.and('have.attr', 'tabindex', '0')
							.and('contain.text','Foto da sua CNH')
							.and('exist');
							cy.get('.dropzone input[type="file"]')
								.should('exist')
								.and('have.attr', 'accept', 'image/*')
								.and('have.attr', 'type', 'file')
								.and('have.css', 'display', 'none');

					});
				});
			});
		});
	});
});

/*
	contexto será:
		Projeto - ...
			Critério de aceite
				Nome tela
			Regra de negócio
				Nome tela
			E2E
				Nome tela

	describes será:
		Validações visuais
		validações comportamentais
		Fluxo funcionais

	describe dentro de describe será:
		dentro de Validação comportamental
			Campo nome
			Campo cpf
			campo...
*/