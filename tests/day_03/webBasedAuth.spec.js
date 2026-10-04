import { test } from '@playwright/test';

test('Web-Based Authentication', { tag: '@smoke' }, async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/basic_auth"); // put username and password
    // Header Authorization: 
    await page.waitForTimeout(5000);
    const succesMessage = page.locator("");
    await expect (succesMessage).toBeVisible();
});

// 1- encode credentials.
//import { test } from '@playwright/test';

test('Encoded WebBased Authentication', { tag: '@smoke' }, async ({ page }) => {
    Buffer.from("admin:admin").toString("base64");
    // Header AUthorization
});