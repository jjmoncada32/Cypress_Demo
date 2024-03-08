import PracticeFormPage from "../PageObjects/PracticeFormPage";
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
            const practiceFormPage = new PracticeFormPage();
            //El Get nos permite buscar un locator en el DOM de la web  como el findelements de selenium
            practiceFormPage.getName().type(data.user.name); //tipeamos
            practiceFormPage.getLasName().type(data.user.apellido);
            practiceFormPage.getLasName().should("not.have.value", " "); //Verificamos que el campo lastName no esté vacío
            practiceFormPage.getEmail().type("jjmoncada@sjagileconsulting.com");
            practiceFormPage.getGender().eq(0).check({ force: true }).should; //forzamos la actividad check para evitar coberturas por otros elementos o errores de visibilidad
            practiceFormPage.getGender().eq(0).should("be.checked");
            practiceFormPage.getGender().eq(0).should("have.have.value", "Male");
            practiceFormPage.getMobileNumber().type("9517532581").should("have.value", "9517532581");
            //cy.get("#userNumber").should("have.length");
            practiceFormPage.getHobbies() //Seleccionamos todos los checkboxes
                .check("3", { force: true }) //pasamos el valor 3, este puede estar en corchetes o no, para decirle que active el checkbox
                .should("be.checked"); //colocamos una aserción para saber si está checkeado
            practiceFormPage.getHobbies() //Seleccionamos todos los checkboxes
                .uncheck("3", { force: true }) ////pasamos el valor 3, este puede estar en corchetes o no, para decirle que desactive el checkbox
                .should("not.be.checked"); //colocamos una aserción para saber si NO está checkeado

            practiceFormPage.getHobbies() //Seleccionamos todos los checkboxes
                .check(["1", "2"], { force: true }) //pasamos el valor 3, este DEBE ESTAR EN CORCHETES, para decirle que active el checkboxes
                .should("be.checked"); //colocamos una aserción para saber si se checkearon
            practiceFormPage.getCalendar().click();
            practiceFormPage.getYearCalendar().select("1991");
            practiceFormPage.getMonthCalendar().select("October");
            practiceFormPage.getDayCalendar().contains("18").click();
            practiceFormPage.getSubject().type("a"); //Aperturo el dropdown con información
            practiceFormPage.getSubjectList() //obtengo el locator que me permite tener una lista de elementos
                .eq(1) //Selecciono el segundo
                .click({ force: true }); //fuerzo el click
            //cy.get("#uploadPicture").selectFile("cypress/fixtures/perro2.png"); //se puede hacer de manera directa
            practiceFormPage.getUploadPicture().selectFile(pathFile); //Creo una constante como ruta
            practiceFormPage.getCurrentAddress().type("Curso de Cypress");
            practiceFormPage.getState().type("NCR{enter}", { force: true }); //Se agrega una secuencia especial de caracteres para que ejecute acciones del teclado
            practiceFormPage.getCity().type("Noida{enter}", { force: true });
            practiceFormPage.getSubmitButton().click({ force: true });

            practiceFormPage.getPopUpTitle().should(
                "have.text",
                "Thanks for submitting the form"
            );
            practiceFormPage.getPopUpCloseModalButton().click({ force: true });
            cy.screenshot()
        });
    })
});