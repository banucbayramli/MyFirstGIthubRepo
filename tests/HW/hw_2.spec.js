import { test } from '@playwright/test';
/*
Practice #1 - Add Tags to Tests

Create a file with 4 Playwright tests.

Test 1 - “Google Search” - Tag: @smoke - Navigate to
https://www.google.com - Search for “Playwright Automation”

Test 2 - “Playwright Website” - Tag: @regression - Navigate to
https://playwright.dev - Click “Get started”

Test 3 - “SauceDemo Login” - Tag: @smoke - Navigate to
https://www.saucedemo.com - Login with standard_user / secret_sauce

Test 4 - “Hover Practice” - Tag: @regression - Navigate to
https://the-internet.herokuapp.com/hovers - Hover over one user image.

After creating the tests: 1. Run ALL tests. 2. Run ONLY @smoke tests. 3.
Run ONLY @regression tests. 4. Write the commands you used as comments.

*/

test("Google Search", { tag: "@smoke" }, async ({ page }) => {
await page.goto("https://www.google.com ");
let search = page.locator("//textarea[@name='q' and @role='combobox' and @aria-label='Search']")
await search.fill("Playwright Automation")

});

test("Playwright Website", { tag: "@regres" }, async ({ page }) => {
await page.goto("https://playwright.dev")
let getStartedButton = page.locator("//a[@class='getStarted_Sjon']")
await getStartedButton.click();
});

test("SauceDemo Login", { tag: "@smoke" }, async ({ page }) => {
await page.goto("https://www.saucedemo.com");
let username = page.locator("//input[@id='user-name']");
let password = page.locator("//input[@id='password']");
await username.fill("standard_user");
await password.fill("secret_sauce");
});

test("Hover Practice", { tag: "@regres" }, async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/hovers");
let img = page.locator("//div[@class='figure']")
await img.nth(0).hover();
});

/*
Practice #4 - beforeEach and afterEach

Create test.describe(“SauceDemo Tests”).

beforeEach should: - Print “BeforeEach function is executed” - Navigate
to https://www.saucedemo.com - Enter standard_user and secret_sauce -
Click Login

Create 3 tests: 1. Click one product. 2. Click another product. 3. Click
the shopping cart.

afterEach should print: “AfterEach function is executed”

QUESTIONS: How many times does beforeEach execute? How many times does
afterEach execute?

*/

test.describe("SauceDemo Tests", ()=> {
test.beforeEach( async ({page})=>{
await page.goto("https://www.saucedemo.com");
let userName = page.locator("//input[@id='user-name']");
let passWord = page.locator("//input[@id='password']");
await userName.fill("standard_user");
await passWord.fill("secret_sauce");
let login = page.locator("//input[@id='login-button']");
await login.click();
});
test.afterEach(async ({page})=> {
console.log("AfterEach function is executed");
});

test("Product 1", async ({page})=>{
let product1 = page.locator("//div [text()='Sauce Labs Backpack']");
await product1.click();

});
test("Product 2", async ({page})=>{
let product2 = page.locator("//div[text()='Sauce Labs Bike Light']");
await product2.click();

});
test("Shopping Cart", async ({page})=>{
let shoppingCart = page.locator("//a[@class='shopping_cart_link']");
await shoppingCart.click();
});


});

/*
beforeAll and afterAll

Create test.describe(“Hook Practice”).

beforeAll prints: “BeforeAll function is executed”

afterAll prints: “AfterAll function is executed”

Create 3 tests that print: “Test Case 01 is executed” “Test Case 02 is
executed” “Test Case 03 is executed”
*/
test.describe("Hook Practice", ()=>{

test.beforeAll(async ({})=>{
console.log("BeforeAll function is executed");
});

test.afterAll(async ({})=>{
console.log("AfterAll function is executed");

});
test("1", async({page})=>{
    console.log("Test Case 01 is executed");
});
test("2", async({page})=>{
    console.log("Test Case 01 is executed");
});
test("3", async({page})=>{
console.log("Test Case 03 is executed");
});

});