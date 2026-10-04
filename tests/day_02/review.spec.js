import {test} from '@playwright/test';
test('Bing Search',{tag: "@smoke"}, async ({page})=> {
await page.goto("https://www.bing.com")
let searchBox = page.locator("//textarea[@id = 'sb_form_q']");
await searchBox.click();

await searchBox.fill("Playwright Automation");
//page.keyboard.type("")
await page.waitForTimeout(3000);
});