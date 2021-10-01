//Ações e interações com a pagina 
// visitar site 
//Pesquisar produto
//acessar produto
//Adicionar produto ao carrinho

const el = require ("../Final_Totvs/elements").PROD

class acessar {

    visitarpagina(){
        cy.visit(el.SITE);
        cy.get(el.COOKIES).click();
    }

    pesquisarproduto(){
     cy.get(el.PESQUISA).type(el.NOMEPRODUTO,"{enter}");
     cy.get(el.PESQUISA).type('{enter}');
     cy.get(el.PRODUTO).click()
     

    }

     adicionarproduto(){
     cy.get(el.ADICIONARCARRINHO).click()
    }

   
    compararPROD(){
    cy.get(el.NOMEPRODCARRINHO).invoke('text').should('be.eq',el.NOMEPRODUTO);
     }
      
    


}

export default new acessar 
