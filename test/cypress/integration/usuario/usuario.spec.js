let user = {}


  
describe('Realiza Cadastro', () => {
  
  before(() => {
    cy.fixture('../fixtures/user.json')
  .then((data) => {
    user = data
  })
  })
  it('Acessar', () => {
    cy.visit('usuario')
  })
  it('Preenche campo Nome', () => {
    cy.get('input[data-cy="nome"]').focus().type(user.nome)
  })
  it('Preenche campo Sobrenome', () => {
    cy.get('input[data-cy="sobrenome"]').focus().type(user.sobrenome)
  })
  it('Escolher estado', () => {
    cy.get('div[data-cy="estado"]').click()
    cy.wait(500)
    cy.contains(user.estado).click()
  })
  it('Preencher campo CPF', () => {
    cy.get('input[data-cy="cpf"]').focus().type(user.cpf)
  })
  it('Validar cpf', () => {
    cy.get('input[data-cy="cpf"]').should('have.value', user.cpfFormatado)
  })
  it('Preencher campo Data', () => {
    cy.get('input[data-cy="dataInput"]').focus().type(user.data)
  })
  it('Validar campo Data', () => {
    cy.get('input[data-cy="dataInput"]').should('have.value', user.data)
  })
  it('Selecionar campo Data', () => {
    cy.get('[data-cy="dataDatePicker"]').click()
    cy.get(':nth-child(22) > .q-btn > .q-btn__content > div').click()
  })
  it('Validar campo selecionado de Data', () => {
    cy.get('input[data-cy="dataInput"]').should('have.value', user.dataSelecionada)
  })
  it('Selecionar sexo', () => {
    cy.contains(user.sexo).click()
  })
  it('Pressionar o botão', () => {
    cy.get('button[data-cy="botao"]').click()
    cy.wait(2000)
  })
})
