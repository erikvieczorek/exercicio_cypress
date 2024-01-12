/// <reference types="cypress" />

describe('Teste para remover um contato da agenda', () => {
    it('Deve remover um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-beqWaB.eQdhbg.contato').should('exist')

        // Obter o número atual de divs com a classe "sc-beqWaB eQdhbg contato"
        cy.get('.sc-beqWaB.eQdhbg.contato').its('length').then((numeroAntes) => {
            
            // Remover um contato
            cy.get('.delete').first().click()

            // Confirmar que o contato foi removido
            cy.get('.sc-beqWaB.eQdhbg.contato').its('length').should('eq', numeroAntes - 1);
        })
    })
})