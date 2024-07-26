/// <reference types="cypress" />

describe("Full Flow End-to-End Test", () => {
  it("should complete the full flow successfully and redirect to Google", () => {
    // Step 1: Start on the IntroScreen
    cy.visit("/");
    cy.contains("Let's confirm your identity").should("be.visible");
    cy.contains(
      "We'll ask for your ID and a selfie. It's quick and secure, and trusted by millions of users worldwide."
    );

    // Step 2: Click the "Let's go!" button to proceed to the WarmupScreen
    cy.contains("button", "Let's go!").click();

    // Step 3: Click the "Continue" button to allow camera access on the WarmupScreen
    cy.contains("We need to access your camera in order to continue.").should(
      "be.visible"
    );
    cy.contains("button", "Continue").click();

    // Step 4: Capture an image using the shutter button on the CameraScreen
    cy.contains("Take a photo of your documents photo page").should(
      "be.visible"
    );
    cy.get('[data-testid="shutter-button"]').click();

    // Step 5: Review the captured image on the PreviewScreen
    cy.contains("Retry").should("be.visible");
    cy.contains("Submit").should("be.visible");

    // Step 6: Submit the captured image
    cy.contains("button", "Submit").click();

    // Step 7: View the ThankyouScreen
    cy.contains("Thank you").should("be.visible");
    cy.contains(
      "Your verification data has been successfully submitted."
    ).should("be.visible");

    // Step 8: Verify redirection to Google
    cy.url().should("include", "google.com");
  });
});
