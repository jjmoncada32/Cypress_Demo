/// <reference types = "Cypress" />

describe("Mi Test Suite", () => {
    it("Mi Caso de Prueba", () => {
        cy.visit("https://demoqa.com/webtables");

        cy.get("div.rt-td:nth-child(4)").each((el,index)=>{
            const email = el.text()
            if(email.includes("alden")){
                expect(email).to.equal("alden@example.com")
            }

        })
    });

  });