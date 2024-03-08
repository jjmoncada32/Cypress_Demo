/// <reference types = "Cypress" />

describe("Mi Test Suite", () => {
    it("Mi Caso de Prueba", () => {
        // cy.visit => Nos permite abrir una URL
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.fixture("dataFormAnidada").then((data) => {
            /*Locators
                - Por ID = #ID del locator -- Ejemplo => #firstName
                - Por clase = .Clase del locator -- Ejemplo => .mr-sm-2
                - Por atributo = [attribue='valor'] -- Ejemplo => [placeholder='First Name'] 
                                => Si se quiere se puede agregar el tag input[placeholder='First Name']
        
              */
            cy.log("***INGRESANDO INFORMACIÓN AL FORMULARIO***");

            const pathFile = "cypress/fixtures/perro.png";
            //El Get nos permite buscar un locator en el DOM de la web  como el findelements de selenium
            cy.get("#firstName").type(data.user.name); //tipeamos
            cy.get("#lastName").type(data.user.apellido);
            cy.get("#lastName").should("not.have.value", " "); //Verificamos que el campo lastName no esté vacío
            cy.get("#userEmail").type("jjmoncada@sjagileconsulting.com");
            cy.get("input[name='gender']").eq(0).check({ force: true }).should; //forzamos la actividad check para evitar coberturas por otros elementos o errores de visibilidad
            cy.get("input[name='gender']").eq(0).should("be.checked");
            cy.get("input[name='gender']").eq(0).should("have.have.value", "Male");
            cy.get("#userNumber").type("9517532581").should("have.value", "9517532581");
            //cy.get("#userNumber").should("have.length");
            cy.get("input[type='checkbox']") //Seleccionamos todos los checkboxes
                .check("3", { force: true }) //pasamos el valor 3, este puede estar en corchetes o no, para decirle que active el checkbox
                .should("be.checked"); //colocamos una aserción para saber si está checkeado
            cy.get("input[type='checkbox']") //Seleccionamos todos los checkboxes
                .uncheck("3", { force: true }) ////pasamos el valor 3, este puede estar en corchetes o no, para decirle que desactive el checkbox
                .should("not.be.checked"); //colocamos una aserción para saber si NO está checkeado

            cy.get("input[type='checkbox']") //Seleccionamos todos los checkboxes
                .check(["1", "2"], { force: true }) //pasamos el valor 3, este DEBE ESTAR EN CORCHETES, para decirle que active el checkboxes
                .should("be.checked"); //colocamos una aserción para saber si se checkearon
            cy.get("#dateOfBirthInput").click();
            cy.get(".react-datepicker__year-select").select("1991");
            cy.get(".react-datepicker__month-select").select("October");
            cy.get(".react-datepicker__day").contains("18").click();
            cy.get(".subjects-auto-complete__value-container").type("a"); //Aperturo el dropdown con información
            cy.get(".subjects-auto-complete__menu-list div") //obtengo el locator que me permite tener una lista de elementos
                .eq(1) //Selecciono el segundo
                .click({ force: true }); //fuerzo el click
            //cy.get("#uploadPicture").selectFile("cypress/fixtures/perro2.png"); //se puede hacer de manera directa
            cy.get("#uploadPicture").selectFile(pathFile); //Creo una constante como ruta
            cy.get("#currentAddress").type("Curso de Cypress");
            //cy.get("#react-select-3-input").click({ force: true })
            //cy.get("#react-select-3-option-0").click({ force: true })
            cy.get("input#react-select-3-input").type("NCR{enter}", { force: true }); //Se agrega una secuencia especial de caracteres para que ejecute acciones del teclado
            cy.get("#react-select-4-input").type("Noida{enter}", { force: true });
            cy.get("#submit").click({ force: true });

            cy.get("#example-modal-sizes-title-lg").should(
                "have.text",
                "Thanks for submitting the form"
            );
            cy.get("#closeLargeModal").click({ force: true });
            //Este es un comentario para probar los cambios en GitHub
        });
    })
});