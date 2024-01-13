/// <reference types="cypress" />

describe('Teste para editar um contato na agenda', () => {
    it('Deve alterar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-beqWaB.eQdhbg.contato').should('exist')

        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Contato Teste')
        cy.get('.alterar').click()

        cy.get('.sc-beqWaB.eQdhbg.contato').first().should('contain', 'Contato Teste')
    })
})