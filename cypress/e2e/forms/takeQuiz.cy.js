describe("Take a Quiz", () => {
    it("Positive test: For tertiary graduates", () => {
        cy.visit("/")

        // Scroll to the element
        cy.get("button[class='px-16 py-5 bg-secondary text-neutralWhite text-2xl lg:text-[1.35rem] xl:text-2xl font-medium rounded-lg transition-all duration-150 hover:bg-secondary-hover w-max']").scrollIntoView({duration:2000});

        // Clicks the "Take a Quiz button"
        cy.get("button[class='px-16 py-5 bg-secondary text-neutralWhite text-2xl lg:text-[1.35rem] xl:text-2xl font-medium rounded-lg transition-all duration-150 hover:bg-secondary-hover w-max']").click();

        // Fill the input fields for the first slide
        cy.get("#quizName").type(`Joshua Odubanjo`);
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com`);
        cy.get("#quizMobile").type(`07055434671`);

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();

        // Fills the fields of the the second slide
        cy.get(".flex.flex-col.gap-y-6.mt-3").children().should("have.length", 5);
        cy.get("input#tertiaryGrad").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(0).type("Zoology");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();

        // Fills the fields of the the third slide
        cy.get("select#techInterest").select("Frontend");
        cy.get("select#techInterest").children().should("have.length", 6);
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        
        // Submit the form
        // cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();

        // Checks if successful
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });


    it.only("Positive test: For tertiary graduates", () => {    
        cy.visit("/")

        // Scroll to the element
        cy.get("button[class='px-16 py-5 bg-secondary text-neutralWhite text-2xl lg:text-[1.35rem] xl:text-2xl font-medium rounded-lg transition-all duration-150 hover:bg-secondary-hover w-max']").scrollIntoView({duration:2000});

        // Clicks the "Take a Quiz button"
        cy.get("button[class='px-16 py-5 bg-secondary text-neutralWhite text-2xl lg:text-[1.35rem] xl:text-2xl font-medium rounded-lg transition-all duration-150 hover:bg-secondary-hover w-max']").should("not.be.disabled");
        cy.get("button[class='px-16 py-5 bg-secondary text-neutralWhite text-2xl lg:text-[1.35rem] xl:text-2xl font-medium rounded-lg transition-all duration-150 hover:bg-secondary-hover w-max']").click();

        // Fill the input fields for the first slide
        // Full name assertion
        cy.get("#quizName").type(`Joshua Odubanjo`).should("have.value", "Joshua Odubanjo");

        // Email Assertion
        cy.get("#quizEmail").type(`joshuaodubanjo13@com`);
        cy.get(".text-xl.text-red-500.font-medium[x-show='errorData.errorList.email.error']").should("be.visible");
        cy.wait(2000);
        cy.get("#quizEmail").clear();
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com`).should("have.value", "joshuaodubanjo13@gmail.com");
        cy.get(".text-xl.text-red-500.font-medium[x-show='errorData.errorList.email.error']").should("not.be.visible");
        
        // Mobile number Assertion
        cy.get("#quizMobile").type(`07055434671`).should("have.value", "07055434671");

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").should("be.visible");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();

        // Fills the fields of the the second slide //
        // Checks number of radio buttons available
        cy.get(".flex.flex-col.gap-y-6.mt-3").children().should("have.length", 5);

        // Tertiary Institution Graduate
        cy.get("input#tertiaryGrad").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(0).should("be.visible", {timeout:2000});
        cy.get("input#tertiaryStudy").eq(0).type("Zoology");
        // Next button
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").should("be.visible").click();
        cy.wait(1000);
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        
        // Tertiary Institution Undergraduate
        cy.get("input#tertiaryStudy").eq(0).clear();
        cy.get("input#tertiaryUnderGrad").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(0).should("be.visible", {timeout:2000});
        cy.get("input#tertiaryStudy").eq(0).type("Geophysics");
        // Next button
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").should("be.visible").click();
        cy.wait(1000);
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        
        // Secondary School Graduate
        cy.get("input#tertiaryStudy").eq(0).clear();
        cy.get("input#secGrad").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(1).type("Mathematical Science");
        // Next button
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").should("be.visible").click();
        cy.wait(1000);
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        
        // Secondary School Undergraduate
        cy.get("input#tertiaryStudy").eq(1).clear();
        cy.get("input#secUnderGrad").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(1).should("be.visible", {timeout:2000});
        cy.get("input#tertiaryStudy").eq(1).type("Philosophy");
        // Next button
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").should("be.visible").click();
        cy.wait(1000);
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        
        // None
        cy.get("input#tertiaryStudy").eq(1).clear();
        cy.get("input#noEducation").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(1).should("not.be.visible", {timeout:2000});

        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").should("be.visible").click();

        // Fills the fields of the the third slide //
        cy.get("select#techInterest").children().should("have.length", 6);

        // Tertiary Institution Graduate
        cy.get("select#techInterest").select("Frontend").should("have.value", "Frontend Development");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        cy.wait(1000);
        cy.get("#more-about").clear();
        
        // Tertiary Institution Undergraduate
        cy.get("select#techInterest").select("Backend").should("have.value", "Backend Development");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        cy.wait(1000);
        cy.get("#more-about").clear();
        
        // Secondary School Graduate
        cy.get("select#techInterest").select("UI/UX Design").should("have.value", "UI/UX Design");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        cy.wait(1000);
        cy.get("#more-about").clear();
       
        // Secondary School Undergraduate
        cy.get("select#techInterest").select("Data Analysis").should("have.value", "Data Analysis");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        cy.wait(1000);
        cy.get("#more-about").clear();
        
        // None
        cy.get("select#techInterest").select("None").should("have.value", "None");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        cy.wait(1000);
        
        // Submit the form
        // cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();

        // Checks if successful
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });    
});


