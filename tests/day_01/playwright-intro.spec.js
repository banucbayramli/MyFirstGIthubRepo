import {test} from '@playwright/test';
// 2 options to import
//const {test} = require ('@playwright/test');
// takes 2 arguments
// 1 - description,
// 2- async - ({page})
test ("Simple Google Search", {tag: "@smoke"}, async ({page})  => {
    //hardcoded, not recommended to use.
    //await page.waitForTimeout(3000);
    await page.goto("https://www.google.com");



let searchBox = page.locator("//textarea[@aria-label='Search']");
await page.waitForTimeout(3000);

await searchBox.fill("Playwright Automation");

await page.waitForTimeout(3000);

await searchBox.press("Enter");
await page.waitForTimeout(3000);
});