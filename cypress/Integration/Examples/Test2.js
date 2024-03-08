//Manejando Frames

///<reference types="Cypress" />
import "cypress-iframe"



describe("Usando Cypress -  Automation Framework", () => {

    it("Uso de Frames con Cypress", () => {

        cy.visit("https://demoqa.com/frames")
        cy.frameLoaded("#frame2") //Permite verificar si ya cargó el frame en la página
        cy.iframe("#frame2") // Hace el switch al frame deseado - Se debe indicar el CSS selector si hay más de un frame
            .find("#sampleHeading") //Carga todos los elementos asociados al Frame y ubica el selector proporcionado
            .should("have.text", "This is a sample page") // Genera una aserción para verificar si hay el texto en el elemento
    })

    it.only("Uso de Alertas - Cypress", () => {
        cy.visit("https://demoqa.com/alerts")
        //Windows:Alert -> Permite reconocer si hay una ventana de tipo alerta y auto-aceptarla
        /*     cy.visit("https://demoqa.com/alerts")
            cy.get('#alertButton').click({ force: true }) //Abrir la alerta mediante el locator
            cy.on("window:alert", (mensaje) => { //
                expect(mensaje).to.equal("You clicked a button")
            }) */

        /*
        //Windows:Confirm -> Permite darle click a la opción "OK"
         cy.get('#confirmButton').click({ force: true })
         cy.on("window:confirm", (mensaje) => {
             expect(mensaje).to.equal("Do you confirm action?")
         }) */

        //Windows:Confirm -> Permite darle click a la opción "Cancel"
        /*     cy.get('#confirmButton').click({ force: true })
            cy.on("window:confirm", (mensaje) => {
                expect(mensaje).to.equal("Do you confirm action?")
                return false;
            }) */


        //Windows:Prompt -> 

        //Se crea una workaround para interceptar esta ventana antes que se dispare simulando el ingreso de texto.

        /* cy.window().then((win) => {
              cy.stub(win, 'prompt').returns('Jorge Moncada');
          });
          cy.get('#promtButton').click({ force: true })
          cy.get('#promptResult').should("have.text", "You entered Jorge Moncada");
       */

        //Se crea una workaround para interceptar esta ventana antes que se dispare simulando cancelar la operación  
        cy.window().then((win) => {
            cy.stub(win, 'prompt').callsFake(() => null)
        });
        cy.get('#promtButton').click({ force: true })
        cy.get('#promptResult').should("not.exist")
    })

})