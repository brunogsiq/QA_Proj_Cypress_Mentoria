export class telaSwagLabs_login 
{
    get titulo() 
    {
        return cy.get('.login_logo') //.classe
    };

    get inputUsuario() 
    {
        return cy.get('#user-name') //#id
    };

    get inputPassword() 
    {
        return cy.get('#password')
    };
};

export class telaSwagLabs_home
{
    get titulo()
    {
        return cy.get('[data-test="title"]') //[propriedade = "atributo"]
    };
};