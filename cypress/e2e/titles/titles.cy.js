// Main Page 
describe("testing Main Page Title", () => {
    it("Main Page", () => {
        cy.visit("/");

        cy.title().should("eq", "A Leading Coding Boot Camp in Lagos, Nigeria. | Anchorsoft Academy");
    });
});



// Software Courses
describe("Testing Software Courses Title", () => {
    it("Software Engineering Courses", () => {
        cy.visit("/courses");

        cy.title().should("eq", "Software Engineering Courses | Anchorsoft Academy");
    });

    it("Frontend Development with React | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/frontend-development-with-react/?mode=course-details");

        cy.title().should("eq", "Frontend Development with React | Anchorsoft Academy");
    });

    it("Fullstack Web Development with the MERN stack | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/fullstack-web-development-with-the-mern-stack/?mode=course-details");

        cy.title().should("eq", "Fullstack Web Development with the MERN stack | Anchorsoft Academy");
    });

    it("Backend REST API Development with Node JS | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/backend-rest-api-development-with-node-js/?mode=course-details");

        cy.title().should("eq", "Backend REST API Development with Node JS | Anchorsoft Academy");
    });

    it("Database Management and Administration with SQL | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/database-management-and-administration-with-sql/?mode=course-details");

        cy.title().should("eq", "Database Management and Administration with SQL | Anchorsoft Academy");
    });

    it("Backend REST API Development with Django REST Framework | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/backend-rest-api-development-with-django-rest-framework/?mode=course-details");

        cy.title().should("eq", "Backend REST API Development with Django REST Framework | Anchorsoft Academy");
    });

    it("Fullstack Web Development with Python/Django(With No React & API) | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/fullstack-web-development-with-pythondjangowith-no-react-api/?mode=course-details");

        cy.title().should("eq", "Fullstack Web Development with Python/Django(With No React & API) | Anchorsoft Academy");
    });

    it("Mobile Apps Development with React Native | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/mobile-apps-development-with-react-native/?mode=course-details");

        cy.title().should("eq", "Mobile Apps Development with React Native | Anchorsoft Academy");
    });

    it("End-to-End Web and API Software Testing with Cypress | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/end-to-end-web-and-api-software-testing-with-cypress/?mode=course-details");

        cy.title().should("eq", "End-to-End Web and API Software Testing with Cypress | Anchorsoft Academy");
    });

    it("Manual Software Testing and Scrum Project Management | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/manual-software-testing-and-scrum-project-management/?mode=course-details");

        cy.title().should("eq", "Manual Software Testing and Scrum Project Management | Anchorsoft Academy");
    });
});



// About Us
describe("Testing About Title", () => {
    it("About Page", () => {
        cy.visit("/about");

        cy.title().should("eq", "About us | Anchorsoft Academy");
    });
});



// Career
describe("Testing Career Title", () => {
    it("Career Page", () => {
        cy.visit("/careers");

        cy.title().should("eq", "Careers | Anchorsoft Academy");
    });

    it("Career Openings", () => {
        cy.visit("/careers-openings/");

        cy.title().should("eq", "Careers Opportunities | Anchorsoft Academy");
    });
});



// Corporate Courses
describe("Testing Corporate Courses Page Title", () => {
    it("Corporate Courses page", () => {
        cy.visit("/courses/corporate/");

        cy.title().should("eq", "Corporate Courses for Executives and Professionals | Anchorsoft Academy");
    });

    it("Microsoft Outlook", () => {
        cy.visit("/courses/lagos/ikeja/microsoft-outlook/?mode=corporate");

        cy.title().should("eq", "Microsoft Outlook | Anchorsoft Academy");
    });
    
    it("Data Analysis with Power BI ", () => {
        cy.visit("/courses/lagos/ikeja/data-analysis-with-power-bi/?mode=corporate");

        cy.title().should("eq", "Data Analysis with Power BI | Anchorsoft Academy");
    });
    
    it("Microsoft Excel | Anchorsoft Academy", () => {
        cy.visit("/courses/lagos/ikeja/microsoft-excel/?mode=corporate");

        cy.title().should("eq", "Microsoft Excel | Anchorsoft Academy");
    });
});



// Program Types (Physical Class)
describe("Testing Physical Class Page Title", () => {
    it("Physical Class", () => {
        cy.visit("/physical-class");

        cy.title().should("eq", "Physical Class | Anchorsoft Academy");
    });
});



// Program Types (Virtual Class)
describe("Testing Virtual Page Title", () => {
    it("Virtual Page", () => {
        cy.visit("/virtual-class");

        cy.title().should("eq", "Virtual Class | Anchorsoft Academy");
    });
});



// Financial Aid (Students Loan)
describe("Testing Student Loan Page Title", () => {
    it("Student Title Page", () => {
        cy.visit("/students-loan/");

        cy.title().should("eq", "Student Loan | Anchorsoft Academy");
    });
});



// Financial Aid (Scholarship)
describe("Testing Scholarship Page Title", () => {
    it("Scholarship", () => {
        cy.visit("/scholarship");

        cy.title().should("eq", "Scholarship | Anchorsoft Academy");
    });
});



// Community (Events)
describe("Testing Events Page Title", () => {
    it("Events Page", () => {
        cy.visit("/events");

        cy.title().should("eq", "Events | Anchorsoft Academy");
    });
});



// Community (Alumni Connect)
describe("Testing Alumni Page Title", () => {
    it("Alumni Page", () => {
        cy.visit("/alumni");

        cy.title().should("eq", "Alumni Connect | Anchorsoft Academy");
    });
});



// Job Portal
describe("Testing Job Portal Title", () => {
    it("Job Portal Page", () => {
        cy.visit("/jobs");

        cy.title().should("eq", "Hire Amazing Talents from Our Community | Anchorsoft Academy");
    });

    it("Job Portal Login Page", () => {
        cy.visit("/jobs/login");

        cy.title().should("eq", "Log In | Anchorsoft Academy");
    });

    it("Job Portal Signup Page", () => {
        cy.visit("/jobs/signup");

        cy.title().should("eq", "Sign Up | Anchorsoft Academy");
    });
});



// Contact us
describe("Testing Contact Us Page Title", () => {
    it("Contact Us Page", () => {
        cy.visit("/#contact");

        cy.title().should("eq", "A Leading Coding Boot Camp in Lagos, Nigeria. | Anchorsoft Academy");
    });
});



// Student login
describe("Testing Student Login Page Title", () => {
    it("Student Login", () => {
        cy.visit("/student/login/");

        cy.title().should("eq", "Anchorsoft Academy-Student Portal");
    });
});



// International
describe("Testing International Page Title", () => {
    it("International Page", () => {
        cy.visit("/international");

        cy.title().should("eq", "Learn to Code from Anywhere | Anchorsoft Academy");
    });
});



// Terms Of Service
describe("Testing Terms Of Servce Page Title", () => {
    it("Terms Of Service Page", () => {
        cy.visit("/terms");

        cy.title().should("eq", "Terms Of Service | Anchorsoft Academy");
    });
});