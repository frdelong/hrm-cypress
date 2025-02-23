class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(6)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }

        return selectors

    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate, testField) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId) //Employe ID
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId) //Other ID
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber) //Driver's License Number
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate) //License Expiry Date
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(testField) //Custom Fields -> Test_field
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }
    
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage