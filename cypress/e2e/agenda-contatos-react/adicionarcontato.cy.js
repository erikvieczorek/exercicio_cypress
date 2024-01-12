/// <reference types="cypress" />

describe('Teste para adicionar um contato na agenda', () => {
    it('Deve incluir um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-beqWaB.eQdhbg.contato').should('exist')

        // Obter o número atual de divs com a classe "sc-beqWaB eQdhbg contato"
        cy.get('.sc-beqWaB.eQdhbg.contato').its('length').then((numeroAntes) => {
            // Adicione um novo contato
            cy.get('input[type="text"]').type('Erik Vieczorek')
            cy.get('input[type="email"]').type('erikvieczorek@gmail.com')
            cy.get('input[type="tel"]').type('54999999999')
            cy.get('.adicionar').click()

            // Confirmar que o contato foi adicionado
            cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', numeroAntes + 1)
        })
    })
})
