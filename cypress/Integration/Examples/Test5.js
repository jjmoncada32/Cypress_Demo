/// <reference types = "Cypress" />

function limpiarCampos(selectores) {
    selectores.forEach(selector => {
        cy.get(selector).clear();
    });
}

describe("Mi Test Suite", () => {
    it("Mi Caso de Prueba", () => {
        // cy.visit => Nos permite abrir una URL
        cy.visit("https://demoqa.com/text-box");
        cy.fixture("multipleDatos.json").then((data) => {

            data.forEach(element => {
                const fullName = element["fullName"]
                cy.log(fullName)

                cy.get("#userName").type(element["fullName"])
                cy.get("#userEmail").type(element["email"])
                cy.get("#currentAddress").type(element["currentAddress"])
                cy.get("#permanentAddress").type(element["permanentAddress"])
                cy.get("#submit").click({ force: true })

                /*   cy.get("#userName").clear()
                  cy.get("#userEmail").clear()
                  cy.get("#currentAddress").clear()
                  cy.get("#permanentAddress").clear() */
                limpiarCampos(["#userName",
                    "#userEmail",
                    "#currentAddress",
                    "#permanentAddress"])

            });

        })
    })
});