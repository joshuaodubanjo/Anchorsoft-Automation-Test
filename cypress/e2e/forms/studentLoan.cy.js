describe("Testing student loan", () => {
        it("Testing all fields", () => {
            cy.on('uncaught:exception', (err, runnable) => {
                return false
                });
    
            cy.visit("/students-loan/");
    
            cy.get("input[placeholder='First Name']").type("Aaron");
            cy.get("input[placeholder='Last Name']").type("Isiaka");
            cy.get("input[placeholder='Email']").type("joshuaodubanjo13@gmail.com");
            cy.get("input[placeholder='Phone']").type("09098374620");
            cy.get("select#course").then((list) => { cy.log(list.length) });
            cy.get("select#course").last().select("Frontend Development with React");
            cy.get("input[placeholder='Residential Address']").type("First floor, 2B Yinusa Adeniji street, opposite St. James church, Unity road, Off Toyin street, Ikeja, Lagos, Nigeria");
            cy.get(`input[placeholder="Guarantor's Full Name"]`).type("Steve Jobs");
            cy.get(`input[placeholder="Guarantor's Residential Address"]`).type("First floor, 2B Yinusa Adeniji street, opposite St. James church, Unity road, Off Toyin street, Ikeja, Lagos, Nigeria");
            cy.get("input[placeholder='Relationship with Guarantor']").type("Family Member");
            cy.get(".w-full.mb-8").eq(5).type("09098374620");
    
            cy.wait(12000);
    
            cy.get("button[type='submit']").click();
    
            cy.get("div[x-text='errorData.message']").should("be.visible");
    
            cy.wait(5000);
        });
    });