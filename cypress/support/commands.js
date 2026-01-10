// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeWithAnimations', (selector, text, wpm = 150) => {
    const delay = (60 / wpm) * 1000 / 5
    cy.get(selector).should('be.visible').clear();
    [...text].forEach((letter, index) => {
        cy.get(selector)
            .type(letter, { delay })
            .wait(delay)
    })
})

Cypress.Commands.add('checkHeaders', (extention) => {
    const commonHeaders = [
        "Strict-Transport-Security", "Content-Security-Policy", "X-Content-Type-Options",
        "X-Frame-Options", "X-XSS-Protection", "Referrer-Policy",
        "Permissions-Policy", "Access-Control-Allow-Origin", "Cache-Control",
        "Expect-CT", "Feature-Policy", "Location"
    ];
    cy.request(Cypress.config('baseUrl') + extention)
        .then((response) => {
            cy.log('Response Headers:', JSON.stringify(response.headers));

            // We don't need to stringify response.headers, we can work directly with it as an object
            const responseHeaders = response.headers;

            // Function to compare headers
            const compareHeaders = (commonHeaders, responseHeaders) => {
                // Check for missing headers
                const missingHeaders = commonHeaders.filter(header => !responseHeaders[header.toLowerCase()]);

                if (missingHeaders.length > 0) {
                    // Log missing headers
                    cy.log("Missing headers:", missingHeaders.join(', '));
                    // Fail the test by asserting that missingHeaders should be empty
                    assert.equal(missingHeaders.length, 0, `Missing headers: ${missingHeaders.join(', ')}`);
                } else {
                    cy.log("All common headers are present in the response.");
                }
            };

            // Run the comparison
            compareHeaders(commonHeaders, responseHeaders);
        });
})

Cypress.Commands.add('login', (user, { create = false } = {}) => {
    cy.visit(Cypress.env('baseUrl') + '#/login')
    if (create) {
        // Register new user
        cy.visit('/undefined#/register');
        cy.get('#emailControl')
        .should('be.visible').type(user.email);
        cy.get('#passwordControl')
        .should('be.visible').type(user.password);
        cy.get('#repeatPasswordControl')
        .should('be.visible').type(user.password);

        cy.get('.mat-mdc-select-placeholder')
        .should('be.visible').click({ force: true });
        cy.get('#mat-option-0')
        .should('be.visible').click({ force: true });
        cy.get('#securityAnswerControl')
        .should('be.visible').type('abc');
        cy.get('#registerButton')
        .should('be.visible').click({ force: true });
    } else {
        // Login existing user
        cy.get('[name="email"]')
        .should('be.visible').type(user.email);
        cy.get('[name="password"]')
        .should('be.visible').type(user.password);
        cy.get('#loginButton')
        .should('be.visible').click({ force: true });
    }

}, {
    validate() {
        cy.request('/rest/user/whoami')
            .its('status')
            .should('eq', 200);
    }

});

Cypress.Commands.add('loginSession', (user) => {
    cy.visit(Cypress.env('baseUrl') + '#/login')
    cy.session(user.email, () => {

        // Check if user exists
        cy.request({
            method: 'GET',
            url: '/rest/user/whoami',
            failOnStatusCode: false
        }).then((res) => {

            // Create user if not found

            if (res.status === 404) {
                cy.log('create user if not found')
                cy.request({
                    method: 'POST',
                    url: '/undefined/undefined#/register',
                    body: {
                        user
                    }
                });
            }

            //login
            cy.request({
                method: 'POST',
                url: '/rest/user/login',
                body: {
                    email: user.email,
                    password: user.password
                }
            });
        });
    }, {
        validate() {
            cy.request('/rest/user/whoami')
                .its('status')
                .should('eq', 200);
        }
    });
});
Cypress.Commands.add('logout', () => {
    // Click the logout button
    cy.get('#navbarAccount > span.mat-mdc-button-touch-target').click({ force: true });
    cy.get('#navbarLogoutButton').click({ force: true });

    // Confirm logout
    cy.url().should('include', 'undefined#/');
});




