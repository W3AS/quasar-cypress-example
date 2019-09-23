
describe('Realiza Cadastro', () => {
  beforeEach(() => {
    cy.visit('usuario')
  })
  it('Preenche campo Nome', () => {
    cy.get('input[data-cy="nome"]').focus().type('Patrick')
  })
})
