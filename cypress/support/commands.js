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

Cypress.Commands.add('typeWithAnimations', (selector,text, wpm = 150) => {
    const delay = (60 / wpm) * 1000 / 5
    cy.get(selector).clear();
    [...text].forEach((letter, index)=>{
        cy.get(selector)
        .type(letter,{delay})
        .wait(delay)
    })
})

Cypress.Commands.add('checkHeaders', (extention) => {
    const commonHeaders = [
        "Strict-Transport-Security","Content-Security-Policy","X-Content-Type-Options",
        "X-Frame-Options","X-XSS-Protection","Referrer-Policy",
        "Permissions-Policy","Access-Control-Allow-Origin","Cache-Control",
        "Expect-CT","Feature-Policy","Location"
    ];
    cy.request(Cypress.config('baseUrl')+extention)
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

