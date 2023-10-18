describe("Testing student loan", () => {
        it("Testing all fields", () => {
            cy.on('uncaught:exception', (err, runnable) => {
                return false
                });
    
            cy.visit("/students-loan/");
    
            cy.get("input[placeholder='First Name']").type("Aaron");
            cy.get(`span[x-show="checkForErrors($el,'first_name')"]`).should("not.be.visible");

            cy.get("input[placeholder='Last Name']").type("Isiaka");
            cy.get(`span[x-show="checkForErrors($el,'last_name')"]`).should("not.be.visible");

            cy.get("input[placeholder='Email']").type("joshuaodubanjo13@gmail.com");
            cy.get(`span[x-show="checkForErrors($el,'email')"]`).should("not.be.visible");
            
            cy.get("input[placeholder='Phone']").type("09098374620");
            cy.get(`span[x-show="checkForErrors($el,'mobile')"]`).should("not.be.visible");
            
            cy.get("select#course").then((list) => { cy.log(list.length) });
            cy.get("select#course").last().select("Frontend Development with React");
            
            cy.get("input[placeholder='Residential Address']").type("First floor, 2B Yinusa Adeniji street, opposite St. James church, Unity road, Off Toyin street, Ikeja, Lagos, Nigeria");
            cy.get("body > main:nth-child(4) > section:nth-child(2) > div:nth-child(2) > form:nth-child(4) > div:nth-child(4) > span:nth-child(3)").should("not.be.visible");

            cy.get(`input[placeholder="Guarantor's Full Name"]`).type("Steve Jobs");
            cy.get("body > main:nth-child(4) > section:nth-child(2) > div:nth-child(2) > form:nth-child(4) > div:nth-child(5) > span:nth-child(3)").should("not.be.visible");

            cy.get(`input[placeholder="Guarantor's Residential Address"]`).type("First floor, 2B Yinusa Adeniji street, opposite St. James church, Unity road, Off Toyin street, Ikeja, Lagos, Nigeria");
            cy.get(`span[x-show="checkForErrors($el,'guarantor_residential_contact_address')"]`).should("not.be.visible");

            cy.get("input[placeholder='Relationship with Guarantor']").type("Family Member");
            cy.get(`span[x-show="checkForErrors($el,'relationship_with_guarantor')"]`).should("not.be.visible");

            cy.get(".w-full.mb-8").eq(5).type("09098374620");
            cy.get(`span[x-show="checkForErrors($el,'guarantor_mobile')"]`).should("not.be.visible");
    
            cy.wait(12000);
    
            cy.get("button[type='submit']").click();
            cy.get("div[x-text='errorData.message']").should("be.visible");
    
            cy.wait(5000);
        });
    });