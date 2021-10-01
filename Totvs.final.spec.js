/// <reference types="cypress" />

import acessar from "../Final_Totvs"

const el = require("../Final_Totvs/elements").PROD

describe('teste Totvs',() => {
    beforeEach(() => {
        acessar.visitarpagina()

        acessar.pesquisarproduto()

        cy.get(el.PRECOCARD).invoke('text').as('precoInicial')
    })

    it('checar nome buscado igual nome selecionado', function ()  {
        cy.get(el.NOMESELECIONADO).invoke('text').should('be.eq', el.NOMEPRODUTO)
    })

    it.only('adicionar produto', function ()  {
        acessar.adicionarproduto()
        acessar.compararPROD()
        cy.get(el.PRECOPRODCARRINHO, {timeout: 6000}).invoke('text').should('be.eq', this.precoInicial)
    })
})