describe("Testing financial aid form", function(){
    it("testing all input of scholarship form", function(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit("/scholarship");

        cy.get("input[placeholder='First Name']").type("Moheed");
        cy.get("input[placeholder='Last Name']").type("Balogun");
        cy.get("input[x-model='scholarData.email.value']").type("joshuaodubanjo13@gmail.com");
        cy.get("input[x-model='scholarData.mobile.value']").type("07098983643");
        cy.xpath("//form[@id='scholarship_form']//select[@id='course']").select("Fullstack Web Development with the MERN stack");

        cy.wait(12000);

        cy.get("#sponsor").click();
        cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
        
        cy.wait(5000);
    });

    it("Testing all input of sponsor form(Individual)", function(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit("/scholarship");

        cy.get("input[placeholder='Full Name']").type("Funke Adegbile");
        cy.get("input[type='number']").type("2");
        cy.xpath("//input[contains(@x-model,'sponsorData.email.value')]").type("joshuaodubanjo13@gmail.com");
        cy.xpath("//input[contains(@x-model,'sponsorData.phone_number.value')]").type("07098983643");
        cy.xpath("//form[@id='sponsorship_form']//select[@id='course']").select("Individual");
        cy.get("#remarks").type("Nothing to see here, just testing");

        // Terms and Conditions
        cy.xpath("//span[contains(@class,'hover:text-secondary cursor-pointer font-medium text-2xl text-primary')]").click();
        // scoll down and up the page
        cy.xpath("//div[contains(@class,'grow overflow-auto text-2xl font-medium text-neutralBlack')]").scrollTo("bottom", {duration: 2000});
        cy.xpath("//div[contains(@class,'grow overflow-auto text-2xl font-medium text-neutralBlack')]").scrollTo("top", {duration: 2000});
        // cancel button
        cy.get("span[class='w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#f4f4f4] cursor-pointer']").click();
        // check terms and condition
        cy.get("input[type='checkbox']").check();

        cy.wait(12000);

        cy.get("form[id='sponsorship_form'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
            
        cy.wait(5000);
    
    });

    it("Testing all input of sponsor form(Organisation)", function(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit("/scholarship");

        // cy.get("form[id='sponsorship_form'] label[for='firstName']").scrollTo("bottom", {duration: 2000});
        cy.get("input[placeholder='Full Name']").type("Adewunmi Felicia");
        cy.get("input[type='number']").type("5");
        cy.xpath("//input[contains(@x-model,'sponsorData.email.value')]").type("joshuaodubanjo13@gmail.com");
        cy.xpath("//input[contains(@x-model,'sponsorData.phone_number.value')]").type("07098983643");

        cy.xpath("//form[@id='sponsorship_form']//select[@id='course']").select("Organization");
        cy.get("input[placeholder='Organization Name']").type("Fedricks Foundation");

        cy.get("#remarks").type("I have no remarks for now");

        // Terms and Conditions
        cy.get("input[type='checkbox']").check();

        cy.wait(12000);

        cy.get("form[id='sponsorship_form'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
        
        cy.wait(5000);
    });
});