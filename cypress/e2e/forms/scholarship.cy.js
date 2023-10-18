describe("Testing financial aid form", function(){
    it("testing all input of scholarship form", function(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit("/scholarship");

        cy.get("input[placeholder='First Name']").type("Moheed");
        cy.get(`span[x-show="checkForErrors($el,'first_name')"]`).should("not.be.visible");
        
        cy.get("input[placeholder='Last Name']").type("Balogun");
        cy.get(`span[x-show="checkForErrors($el,'last_name')"]`).should("not.be.visible");
        
        cy.get("input[x-model='scholarData.email.value']").type("joshuaodubanjo13@gmail.com");
        cy.get("body > main:nth-child(4) > section:nth-child(4) > div:nth-child(3) > form:nth-child(4) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)").should("not.be.visible");
        
        cy.get("input[x-model='scholarData.mobile.value']").type("07098983643");
        cy.get(`span[x-show="checkForErrors($el,'mobile')"]`).should("not.be.visible");

        cy.xpath("//form[@id='scholarship_form']//select[@id='course']").select("Fullstack Web Development with the MERN stack");

        // Cqptcha assertion
        cy.get("form[id='scholarship_form'] div[class='mb-8 flex md:items-start gap-x-4 flex-col-reverse gap-y-5 md:flex-row'] span[class='text-xl text-red-500 font-medium']").should("eq", "not.be.visible");

        cy.wait(12000);

        // Submit form
        // cy.get("#sponsor").click();
        // cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
        
        cy.wait(5000);
    });

    // Sponsorship with Individual as sponsor type
    it("Testing all input of sponsor form(Individual)", function(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit("/scholarship");

        // 
        cy.get("input[placeholder='Full Name']").type("Funke Adegbile");
        cy.get(`span[x-show="checkForErrors($el,'name_of_sponsor')"]`).should("not.be.visible");

        cy.get("input[type='number']").type("2");
        cy.get(`span[x-show="checkForErrors($el,'number_of_student')"]`).should("not.be.visible");

        cy.xpath("//input[contains(@x-model,'sponsorData.email.value')]").type("joshuaodubanjo13@gmail.com");
        cy.get("body > main:nth-child(4) > section:nth-child(5) > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)").should("not.be.visible");

        cy.xpath("//input[contains(@x-model,'sponsorData.phone_number.value')]").type("07098983643");
        cy.get("body > main:nth-child(4) > section:nth-child(5) > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.xpath("//form[@id='sponsorship_form']//select[@id='course']").select("Individual");
        cy.get(`span[x-show="checkForErrors($el,'organizationType')"]`).should("not.be.visible");

        cy.get("#remarks").type("Nothing to see here, just testing");
        cy.get(`span[x-show="checkForErrors($el,'remarks')"]`).should("not.be.visible");

        // Terms and Conditions
        cy.xpath("//span[contains(@class,'hover:text-secondary cursor-pointer font-medium text-2xl text-primary')]").click();
        // scroll down and up the page
        cy.xpath("//div[contains(@class,'grow overflow-auto text-2xl font-medium text-neutralBlack')]").scrollTo("bottom", {duration: 2000});
        cy.xpath("//div[contains(@class,'grow overflow-auto text-2xl font-medium text-neutralBlack')]").scrollTo("top", {duration: 2000});
        // Cancel button
        cy.get("span[class='w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#f4f4f4] cursor-pointer']").click();
        // Check terms and condition
        cy.get("input[type='checkbox']").check();

        cy.wait(12000);

        // cy.get("form[id='sponsorship_form'] button[type='submit']").click();
        // cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
            
        cy.wait(5000);
    
    });

    // Sponsorship with organisation as sponsor type
    it("Testing all input of sponsor form(Organisation)", function(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit("/scholarship");

        cy.get("input[placeholder='Full Name']").type("Adewunmi Felicia");
        cy.get(`span[x-show="checkForErrors($el,'name_of_sponsor')"]`).should("not.be.visible");

        cy.get("input[type='number']").type("5");
        cy.get(`span[x-show="checkForErrors($el,'number_of_student')"]`).should("not.be.visible");

        cy.xpath("//input[contains(@x-model,'sponsorData.email.value')]").type("joshuaodubanjo13@gmail.com");
        cy.get("body > main:nth-child(4) > section:nth-child(5) > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)").should("not.be.visible");

        cy.xpath("//input[contains(@x-model,'sponsorData.phone_number.value')]").type("07098983643");
        cy.get("body > main:nth-child(4) > section:nth-child(5) > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.xpath("//form[@id='sponsorship_form']//select[@id='course']").select("Organization");
        cy.get(`span[x-show="checkForErrors($el,'organizationType')"]`).should("not.be.visible");
        cy.get("input[placeholder='Organization Name']").type("Fedricks Foundation");

        cy.get("#remarks").type("I have no remarks for now");
        cy.get(`span[x-show="checkForErrors($el,'remarks')"]`).should("not.be.visible");

        // Terms and Conditions
        cy.get("input[type='checkbox']").check();

        cy.wait(12000);

        // cy.get("form[id='sponsorship_form'] button[type='submit']").click();
        // cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
        
        cy.wait(5000);
    });
});