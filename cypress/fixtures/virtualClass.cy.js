describe("Virtual Class Page", () => {
    it("Anchorsoft Academy vs Other Platforms", () => {
        cy.on("uncaught: exception", (err, runable) => {
            return false;
        });

        cy.visit("https://www.anchorsoftacademy.com/virtual-class/");

        cy.get("tbody[x-data='tab']").should("have.length", "10");      // Number of rows
        cy.get("thead tr").should("have.length", "7");     // Number of columns

        // Check cell data from specific row & column     
        cy.get("tbody[x-data='tab']tr:nth-child(3)>td:nth-child(2)>span").contains("Watch lectures whenever you like");

    });
});