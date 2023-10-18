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