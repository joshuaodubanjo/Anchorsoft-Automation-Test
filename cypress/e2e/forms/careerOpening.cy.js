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

        cy.wait(5000);
        cy.get("button[type='submit']").click();
        cy.get("div[class='overflow-hidden p-7 fixed top-0 w-full h-full md:w-[515px] md:h-[504px] md:rounded-xl right-0 bottom-0 left-0 m-auto bg-white z-[999999] flex flex-col gap-y-7'] span[class='mb-7 text-5xl font-extrabold text-green-500 flex text-center']")
        .contains("Great");
        
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

        // cy.get("section[class='px-8 md:px-0 flex flex-col items-center justify-center py-12']").scrollTo("bottom", {duration: 2000});
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

        cy.wait(5000);
        cy.get("button[type='submit']").click();
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

        cy.wait(5000);
        cy.get("button[type='submit']").click();
    });
});