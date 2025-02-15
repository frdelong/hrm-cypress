describe('Orange HRM Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })
  it('Login - Invalid Credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin1234')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
})