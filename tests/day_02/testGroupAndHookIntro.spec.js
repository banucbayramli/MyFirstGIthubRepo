import { test } from '@playwright/test';

test.describe("Log in and validate Header, Middle, and Footer", async() => {

});

// hook
test.beforeEach(async ({page}) => {
console.log("Login into the page");
});

test.afterEach(async ({page}) => {
console.log("Log out from the page");
});

test('Sample Test - Verifying header of page', {tag: ["@TC-01", "@smoke", "@regres"]}, async ({ page }) => {
   // console.log("Login into the page");
    console.log("Test Case 01 running.......validation for header");
    //console.log("Log out from the page");
});



test('Sample Test - Verifying midle part of page', {tag: ["@TC-02", "@smoke", "@regres"]}, async ({ page }) => {
    //console.log("Login into the page");
    console.log("Test Case 02 running......validation for middle");
    //console.log("Log out from the page");
});


test('Sample Test - Verifying footer of page', {tag: ["@TC-03", "@smoke", "@regres"]}, async ({ page }) => {
    //console.log("Login into the page");
    console.log("Test Case 03 running......validation for footer");
    //console.log("Log out from the page");
});
// group related tests - 
