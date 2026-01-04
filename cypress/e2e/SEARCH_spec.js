// List of common security headers
const commonHeaders2 = [
    "Strict-Transport-Security",
    "Content-Security-Policy",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "X-XSS-Protection",
    "Referrer-Policy",
    "Permissions-Policy",
    "Access-Control-Allow-Origin",
    "Cache-Control",
    "Expect-CT",
    "Feature-Policy",
    "Location"
];

// Example response headers (simulated for this example)
const response = {
    headers: {
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "Content-Security-Policy": "default-src 'self'",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "no-referrer",
        "Permissions-Policy": "geolocation=(self)",
        "Cache-Control": "no-store",
        "Expect-CT": "max-age=86400, enforce, report-uri='https://example.com/report'",
        "Access-Control-Allow-Origin": "*"
    }
};



describe('landing page spec > search bar', () => {
    it('opens on landing page', () => {
        cy.request(Cypress.config('baseUrl'))

    });
    
    it('basic cybersecurity headers', () => {
        const commonHeaders = [
            "Strict-Transport-Security",
            "Content-Security-Policy",
            "X-Content-Type-Options",
            "X-Frame-Options",
            "X-XSS-Protection",
            "Referrer-Policy",
            "Permissions-Policy",
            "Access-Control-Allow-Origin",
            "Cache-Control",
            "Expect-CT",
            "Feature-Policy",
            "Location"
        ];
        cy.request(Cypress.config('baseUrl'))
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
    // for (let index = 0; index < commonHeaders.length; index++) {
    //     it('does header have ' + commonHeaders[index].toLowerCase(), () => {
    //         cy.request(Cypress.config('baseUrl'))
    //             .then((response) => {
    //                 cy.log('Response Headers:', JSON.stringify(response.headers));
    //                 expect(response.headers).to.have.property(commonHeaders[index].toLowerCase());

    //                 // Convert response headers to an object (this would typically be a real response)
    //                 const responseHeaders = response.headers;

    //                 // Compare headers - we just want to check if the common headers exist in the response
    //                 const compareHeaders = (commonHeaders, responseHeaders) => {
    //                     const missingHeaders = commonHeaders.filter(header => !(header in responseHeaders));

    //                     if (missingHeaders.length > 0) {
    //                         cy.log("Missing headers:", missingHeaders);
    //                     } else {
    //                         cy.log("All common headers are present in the response.");
    //                     }
    //                 };
    //             });

    //     })
    // }



})