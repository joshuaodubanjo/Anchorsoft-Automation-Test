describe("Testing contact form", () => {
    it("Testing all contact input fields", () => {
        cy.visit("/");

        cy.get("#fullName").type("Oba Solomons");
        cy.get("body > main:nth-child(4) > section:nth-child(12) > div:nth-child(2) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > span:nth-child(3)").should("not.be.visible");

        cy.get("#email").type("joshuaodubanjo13@gmail.com");
        
        cy.get("#mobileNo").type("07055434671");
        
        cy.get("#message").type("Nothing to check here, just testing!!!");
        cy.get(`span[x-show="checkForErrors($el,'message')"]`).should("not.be.visible");
                
        cy.wait(12000);
        
        cy.get("button[type='submit']").click();
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");
        
        cy.wait(5000);
    });
});