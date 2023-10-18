import 'cypress-file-upload';

// Take a Quiz //
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
        cy.get("div[class='flex items-center justify-center gap-x-8'] button[class='nextQBtn px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer']").click();
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




// ---------------------------------------------------------------------- //
// Contact Form //
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





// ---------------------------------------------------------------------- //
// Student loan form test //
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





// ---------------------------------------------------------------------- //
// Financial Aid Test //
// Scholarship Test
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
        cy.get("#sponsor").click();
        cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
        
        cy.wait(5000);
    });

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

        cy.get("form[id='sponsorship_form'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
            
        cy.wait(5000);
    });

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

        cy.get("form[id='sponsorship_form'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").eq(1).should("be.visible");
        
        cy.wait(5000);
    });
});





// ---------------------------------------------------------------------- //
// Career Openings Test //
// Microsoft Office Specialist & Instructor
describe("Testing Office and Tools", () => {
    it("Microsoft Office Specialist & Instructor", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("https://www.anchorsoftacademy.com/careers-openings/6/");

        cy.get("button[class='px-12 md:px-16 py-7 bg-primary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        cy.get("input[placeholder='First Name']").type("Isaiah");
        cy.get("input[x-model='applicationData.last_name']").type("Walker");
        cy.get("input[x-model='applicationData.email']").type("joshuaodubanjo13@gmail.com");
        cy.get("input[placeholder='Mobile Number']").type("08074837462");
        cy.get(`input[placeholder="Current Salary (if you're currently employed)"]`).type("50000");
        cy.get("input[placeholder='Salary Expectation']").type("70000");
        cy.get("input[placeholder='Course Studied']").type("Microbiolgy");
        cy.get("select[x-model='applicationData.highest_qualification']").select("Msc");
        cy.get("select[x-model='applicationData.degree']").select("Second Class Upper");
        
        // File Upload
        cy.get("#cv_up").invoke("show").attachFile("cheatsheet.pdf");

        cy.get("button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");
        
        cy.wait(5000);
    });
});


// Testing the Finance Section 
describe("Testing Finance", () => {
    it("Accountant/Accounting Officer", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("https://www.anchorsoftacademy.com/careers-openings/3/");
        cy.wait(5000);

        cy.get("button[class='px-12 md:px-16 py-7 bg-primary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        cy.get("input[placeholder='First Name']").type("John");
        cy.get("input[x-model='applicationData.last_name']").type("Zebedee");
        cy.get("input[x-model='applicationData.email']").type("joshuaodubanjo13@gmail.com");
        cy.get("input[placeholder='Mobile Number']").type("08074837462");
        cy.get(`input[placeholder="Current Salary (if you're currently employed)"]`).type("50000");
        cy.get("input[placeholder='Salary Expectation']").type("70000");
        cy.get("input[placeholder='Course Studied']").type("Business Administration");
        cy.get("select[x-model='applicationData.highest_qualification']").select("PhD");
        cy.get("select[x-model='applicationData.degree']").select("First Class/Distinction");
        
        // File Upload
        cy.get("#cv_up").invoke("show").attachFile("cheatsheet.pdf");

        cy.get("button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");
        
        cy.wait(5000);
    });
});


// Testing the M&BDev
describe("Testing Marketing & Business Development", () => {
    it("Video Editor/Video Content Creator", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("https://www.anchorsoftacademy.com/careers-openings/5/");

        cy.get("button[class='px-12 md:px-16 py-7 bg-primary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").click();
        cy.get("input[placeholder='First Name']").type("Mace");
        cy.get("input[x-model='applicationData.last_name']").type("Windu");
        cy.get("input[x-model='applicationData.email']").type("joshuaodubanjo13@gmail.com");
        cy.get("input[placeholder='Mobile Number']").type("09109384782");
        cy.get(`input[placeholder="Current Salary (if you're currently employed)"]`).type("50000");
        cy.get(`input[placeholder='Salary Expectation']`).type("70000");
        cy.get("input[placeholder='Course Studied']").type("Videography");
        cy.get("select[x-model='applicationData.highest_qualification']").select("Bsc/B.Tech");
        cy.get("select[x-model='applicationData.degree']").select("Second Class Lower");
        
        // File Upload
        cy.get("#cv_up").invoke("show").attachFile("cheatsheet.pdf");

        cy.get("button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");
    });
});






// ---------------------------------------------------------------------- //
// Corporate Course Test //
describe("Microsoft Outlook", () => {
    it("Physical Class", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/microsoft-outlook/?mode=corporate");

        cy.get("button[class='disabled:cursor-not-allowed disabled:bg-[#e8cccc] px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").scrollIntoView({duration:2000}).click();

        cy.get("#fullname").eq(0).type("Paul Owoseni");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-data='waitlist'] div[x-text='successMessage']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Data Analysis with Power BI", () => {
    it("Physical Class", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/data-analysis-with-power-bi/?mode=corporate");

        cy.get("button[class='disabled:cursor-not-allowed disabled:bg-[#e8cccc] px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").scrollIntoView({duration:2000}).click();

        cy.get("#fullname").eq(0).type("Paul Owoseni");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-data='waitlist'] div[x-text='successMessage']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Microsoft Excel", () => {
    it("Physical Class", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/data-analysis-with-power-bi/?mode=corporate");

        cy.get("button[class='disabled:cursor-not-allowed disabled:bg-[#e8cccc] px-14 py-5 bg-secondary text-2xl lg:text-[1.35rem] xl:text-2xl text-neutralWhite font-medium w-max rounded-lg transition-all duration-200 hover:bg-secondary-hover']").scrollIntoView({duration:2000}).click();

        cy.get("#fullname").eq(0).type("Paul Owoseni");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-data='waitlist'] div[x-text='successMessage']").should("be.visible");

        cy.wait(5000);
    });
});






// ---------------------------------------------------------------------- //
// Software Engineering Courses Test
describe("Frontend Development With React", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/frontend-development-with-react/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Steve Wonder");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Fullstack Web Development With MERN Stack", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/fullstack-web-development-with-the-mern-stack/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Steve Austin");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Backend REST API Development with Node JS", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/backend-rest-api-development-with-node-js/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Shawn Micheals");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Database Management and Administration with SQL", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/database-management-and-administration-with-sql/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Aaron Pisces");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Backend REST API Development with Django REST Framework", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/backend-rest-api-development-with-django-rest-framework/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Mitchell Isaiah");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Fullstack Web Development with Python/Django(With No React & API)", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/fullstack-web-development-with-pythondjangowith-no-react-api/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("James Jordan");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Mobile Apps Development with React Native", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/mobile-apps-development-with-react-native/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Carmilla Stones");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("End-to-End Web and API Software Testing with Cypress", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/end-to-end-web-and-api-software-testing-with-cypress/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Felicia Marinette");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});


describe("Manual Software Testing and Scrum Project Management", () => {
    it("Physical/Onsite", () => {
        cy.on("uncaught:exception", (err, runable) => {
            return false;
        });

        cy.visit("/courses/lagos/ikeja/manual-software-testing-and-scrum-project-management/?mode=course-details");

        cy.get("body > main:nth-child(4) > section:nth-child(6) > div:nth-child(4) > div:nth-child(4)").scrollIntoView({duration:2000});

        cy.get("button").eq(7).click();
        
        cy.get("#fullname").eq(0).type("Adams Smith");
        cy.get(`.text-xl.text-red-500.font-medium[x-show="checkForErrors($el, 'full_name')"]`).should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type("joshuaodubanjo13@gmail.com");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)").should("not.be.visible");

        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)").type("09089836472");
        cy.get("body > div:nth-child(9) > form:nth-child(6) > div:nth-child(1) > div:nth-child(3) > span:nth-child(3)").should("not.be.visible");

        cy.wait(12000);

        cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-show='formSubmitted']").should("be.visible");

        cy.wait(5000);
    });
});