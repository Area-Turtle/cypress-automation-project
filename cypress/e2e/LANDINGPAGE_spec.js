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

describe('landing page spec', () => {
  it('opens on landing page', () => {
    cy.request(Cypress.config('baseUrl'))
      .should('have.property', 'status', 200);
  })

  it.skip('basic cybersecurity headers', () => {
    cy.checkHeaders('/#/');

  })

})