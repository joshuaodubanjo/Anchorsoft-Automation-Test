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

        // cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        // cy.get("div[x-data='waitlist'] div[x-text='successMessage']").should("be.visible");

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

        // cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        // cy.get("div[x-data='waitlist'] div[x-text='successMessage']").should("be.visible");

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

        // cy.get("div[class='flex flex-col gap-y-5 p-8'] button[type='submit']").click();
        cy.get("div[x-data='waitlist'] div[x-text='successMessage']").should("be.visible");

        cy.wait(5000);
    });
});