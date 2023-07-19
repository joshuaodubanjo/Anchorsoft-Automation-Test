describe("Take a Quiz", () => {
    it("Testing for tertiary graduates", () => {
        cy.visit("/")

        // Clicks the "Take a Quiz button"
        cy.get("body > main:nth-child(4) > section:nth-child(8) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)").click();

        // Fill the input fields for the first slide
        cy.get("#quizName").type(`Joshua Odubanjo{enter}`);
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com{enter}`);
        cy.get("#quizMobile").type(`07055434671{enter}`);

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the second slide
        cy.get(".flex.flex-col.gap-y-6.mt-3").children().should("have.length", 5);
        cy.get("input#tertiaryGrad").check({force:true}).should("be.checked");
        cy.get("input#tertiaryStudy").eq(0).type("Zoology");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the third slide
        cy.get("select#techInterest").select("Frontend");
        cy.get("select#techInterest").children().should("have.length", 6);
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("#more-about").should("have.value", "Nothing to check here, just testing!!!");
        
        // Submit the form
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();

        // Checks if successful
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });


    it("Testing for tertiary undergraduates", () => {
        cy.visit("/")

        // Clicks the "Take a Quiz button"
        cy.get("body > main:nth-child(4) > section:nth-child(8) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)").click();

        // Fill the input fields for the first slide
        cy.get("#quizName").type(`Sarah Oyedepo{enter}`);
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com{enter}`);
        cy.get("#quizMobile").type(`07055434671{enter}`);

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the second slide
        cy.get("input#tertiaryUnderGrad").check({force:true});
        cy.get("input#tertiaryStudy").eq(0).type("Geophysics");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the third slide
        cy.get("select#techInterest").select("Backend");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });


    it("Testing for secondary school graduates", () => {
        cy.visit("/")

        // Clicks the "Take a Quiz button"
        cy.get("body > main:nth-child(4) > section:nth-child(8) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)").click();

        // Fill the input fields for the first slide
        cy.get("#quizName").type(`Moses Bliss{enter}`);
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com{enter}`);
        cy.get("#quizMobile").type(`07055434671{enter}`);

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the second slide
        cy.get("input#secGrad").check({force:true});
        cy.get("input#tertiaryStudy").eq(1).type("Mathematical Science");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the third slide
        cy.get("select#techInterest").select("UI/UX Design");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });


    it("Testing for secondary school undergraduates", () => {
        cy.visit("/")

        // Clicks the "Take a Quiz button"
        cy.get("body > main:nth-child(4) > section:nth-child(8) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)").click();

        // Fill the input fields for the first slide
        cy.get("#quizName").type(`Abraham Lincon{enter}`);
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com{enter}`);
        cy.get("#quizMobile").type(`07055434671{enter}`);

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the second slide
        cy.get("input#secUnderGrad").check({force:true});
        cy.get("input#tertiaryStudy").eq(1).type("Philosophy");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the third slide
        cy.get("select#techInterest").select("Data Analysis");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });


    it("Testing for none", () => {
        cy.visit("/")

        // Clicks the "Take a Quiz button"
        cy.get("body > main:nth-child(4) > section:nth-child(8) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)").click();

        // Fill the input fields for the first slide
        cy.get("#quizName").type(`Mark Eze{enter}`);
        cy.get("#quizEmail").type(`joshuaodubanjo13@gmail.com{enter}`);
        cy.get("#quizMobile").type(`07055434671{enter}`);

        // Clicks next button to go to the second slide
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the second slide
        cy.get("input#noEducation").check({force:true});
        cy.get(".flex-col.flex.gap-y-4.mt-5").eq(0).should("not.be.visible");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']")
        .click();

        // Fills the fields of the the third slide
        cy.get("select#techInterest").select("None");
        cy.get("#more-about").type("Nothing to check here, just testing!!!");
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");

        cy.wait(5000);
    });
});