
class PracticeFormPage {

    getName() {
        return cy.get("#firstName")
    }

    getLasName() {
        return cy.get("#lastName")
    }
    getEmail() {
        return cy.get("#userEmail")
    }

    getGender() {
        return cy.get("input[name='gender']")
    }
    getMobileNumber() {
        return cy.get("#userNumber")
    }

    getHobbies() {
        return cy.get("input[type='checkbox']")
    }
    getCalendar() {
        return cy.get("#dateOfBirthInput")
    }

    getYearCalendar() {
        return cy.get(".react-datepicker__year-select")
    }

    getMonthCalendar() {
        return cy.get(".react-datepicker__month-select")
    }
    getDayCalendar() {
        return cy.get(".react-datepicker__day")
    }

    getSubject() {
        return cy.get(".subjects-auto-complete__value-container")
    }

    getSubjectList() {
        return cy.get(".subjects-auto-complete__menu-list div")
    }

    getUploadPicture() {
        return cy.get("#uploadPicture")
    }

    getCurrentAddress() {
        return cy.get("#currentAddress")
    }

    getState() {
        return cy.get("input#react-select-3-input")
    }

    getCity() {
        return cy.get("#react-select-4-input")
    }

    getSubmitButton() {
        return cy.get("#submit")
    }

    getPopUpTitle() {
        return cy.get("#example-modal-sizes-title-lg")
    }

    getPopUpCloseModalButton() {
        return cy.get("#closeLargeModal")
    }

}

module.exports = PracticeFormPage