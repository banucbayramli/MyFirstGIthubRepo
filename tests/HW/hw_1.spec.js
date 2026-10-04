import { test, expect } from '@playwright/test';

test('Bing Search', async ({ page }) => {
await page.goto("https://www.bing.com");

let searchBox = page.getByRole('combobox', { name: 'Enter your search here - Search suggestions will show as you type' });
await searchBox.click()
await searchBox.fill("Playwright Automation");
await searchBox.press("Enter");
//await  page.waitForTimeout(3000);
//await  page.keyboard.press("Enter");
//await  page.waitForTimeout(3000);
});
/* Practice #2 - DuckDuckGo Search

1.  Create a test called “DuckDuckGo Search”.
2.  Navigate to: https://duckduckgo.com
3.  Locate the search box.
4.  Fill the search box with: JavaScript Automation
5.  Press Enter.
6.  Observe the search results.

Methods you may need: goto() fill() press()*/

test ('DuckDuckGo Search', async({page})=>{
await page.goto("https://duckduckgo.com");
let searchBox2 = page.getByRole('combobox', { name: 'Search with DuckDuckGo' });
await searchBox2.fill("JavaScript Automation");
await searchBox2.press("Enter");



});

/*
Practice #3 - Playwright Website Navigation

1.  Create a test called “Playwright Website Navigation”.
2.  Navigate to: https://playwright.dev
3.  Locate the “Get started” link/button.
4.  Click it.
5.  On the next page, locate the “Writing tests” link in the navigation.
6.  Click it.

Methods you may need: goto() click()
*/

test('Playwright Website Navigation', async({page}) => {
await page.goto("https://playwright.dev");
let getStarted = page.getByRole('link', { name: 'Get started' })
await getStarted.click();
let writingTests = page.locator("//a[@href='/docs/writing-tests' and .//span[normalize-space()='Writing tests']]");
await writingTests.click();

});

/*
Practice #4 - Playwright Website Search

1.  Create a test called “Playwright Documentation Search”.
2.  Navigate to: https://playwright.dev
3.  Locate and click the Search button.
4.  Locate the search input.
5.  Enter: locators
6.  Locate one of the displayed search results related to Locators.
7.  Click the result.

*/
test ('Playwright Documentation Search', async({page}) => {
await page.goto("https://playwright.dev")
let sB = page.getByRole('button', { name: 'Search (Meta+k)' });
await sB.click();
let sI =page.getByPlaceholder('Search docs');
await sI.fill("locators");
//await sI.press("Enter")
let result = page.locator("//span[contains(concat(' ', normalize-space(@class), ' '), ' DocSearch-Hit-title ')]").nth(3)
await result.click();



});

/*
Practice #5 - YouTube Search

1.  Create a test called “YouTube Playwright Search”.
2.  Navigate to: https://www.youtube.com
3.  Locate the Search box.
4.  Click the Search box.
5.  Enter: Playwright Automation Tutorial
6.  Press Enter.
7.  Locate a video from the search results.
8.  Click the video.

IMPORTANT: Do not create a locator that depends on an exact video title
because search results can change. Try to create a locator that can
identify a video result more generally.

Methods you may need: goto() click() fill() press()
*/
test ('YouTube Playwright Search', async ({page})=> {
    await page.goto("https://www.youtube.com");
    let searchB = page.locator("//yt-searchbox[@role='search']//input[@name='search_query' and @role='combobox' and @placeholder='Search']")
    await searchB.click();
    await searchB.fill("Playwright Automation Tutorial");
    await searchB.press("Enter");
    let video = page.locator('a.ytLockupMetadataViewModelTitle')
    await video.click();
});
/*
Practice #6 - Hover Practice

1.  Create a test called “Playwright Hover Practice”.
2.  Navigate to: https://the-internet.herokuapp.com/hovers
3.  Locate one of the user images.
4.  Hover over the image.
5.  After hovering, locate the “View profile” link that appears.
6.  Click the “View profile” link.

Methods you may need: goto() hover() click()
*/
test ('Hover', async ({page})=>{
await page.goto("https://the-internet.herokuapp.com/hovers");
let img = page.locator("//div[contains(concat(' ', normalize-space(@class), ' '), ' figure ')]").nth(1)
await img.hover();
let viewProfile = page.getByText('View profile', { exact: true }).nth(1);
await viewProfile.click();
});

/*
Practice #7 - Form Input Practice

1.  Create a test called “Form Input Practice”.
2.  Navigate to: https://www.saucedemo.com
3.  Locate the Username field.
4.  Enter: standard_user
5.  Locate the Password field.
6.  Enter: secret_sauce
7.  Locate the Login button.
8.  Click the Login button.
9.  After login, locate one product and click its product name.

Methods you may need: goto() fill() click()

*/
//import { test } from '@playwright/test';

test('Form Input Practice', async ({ page }) => {
await page.goto('https://www.saucedemo.com');
let userName = page.getByRole('textbox', { name: 'Username' })
await userName.fill("standard_user");
let passWord = page.getByLabel('Password');
await passWord.fill("secret_sauce");
let logIn = page.locator("//input[@type='submit' and @value='Login']");
await logIn.click();
let product = page.locator('.inventory_item_name').nth(0);
await product.click();


});

/*
Practice #8 - Keyboard Press Practice

1.  Create a test called “Keyboard Press Practice”.
2.  Navigate to: https://the-internet.herokuapp.com/key_presses
3.  Locate the input field.
4.  Click the input field.
5.  Press Enter using Playwright.
6.  Then press Escape.
7.  Then press Tab.

Methods you may need: goto() click() press()
*/
test ("Keyboard Press Practice", async ({page})=> {
    await page.goto("https://the-internet.herokuapp.com/key_presses");
    let input = page.locator('//input[@id = "target"]');
    await input.click();
    await input.press("Enter");
    await input.press("Escape")
    await input.press("Tab");


});


