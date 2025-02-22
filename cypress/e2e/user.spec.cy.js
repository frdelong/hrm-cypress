import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardTitle: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericCombobox: ".oxd-select-text--arrow",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Bertrand')
    cy.get(selectorsList.lastNameField).clear().type('Russel')
    cy.get(selectorsList.genericField).eq(3).clear().type('47390') //Employe ID
    cy.get(selectorsList.genericField).eq(4).clear().type('9999999') //Other ID
    cy.get(selectorsList.genericField).eq(5).clear().type('88888') //Driver's License Number
    cy.get(selectorsList.genericField).eq(6).clear().type('2026-30-01') //License Expiry Date
    cy.get(selectorsList.genericField).eq(8).clear().type('444') //Custom Fields -> Test_field
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })


    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')


    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(6)').click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

    //cy.get(selectorsList.genericField).eq(7).clear().type('1990-30-01') //Birthday
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})