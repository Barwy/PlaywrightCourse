import { test, expect } from '@playwright/test';
import tags from '../Modules/Playwright/05-API/testData/tags.json'

test.beforeEach(async ({ page }) => {
    await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
        await route.fulfill ({
            json: tags //this takes contents of the tags.json file;
        })
    })
    await page.goto('https://conduit.bondaracademy.com/');
});


test('api tests', async ({ page }) => {
    await expect(page.locator('.navbar-brand')).toHaveText(/conduit/);
    await expect(page.locator('.sidebar .tag-pill')).toContainText(['Test', 'Test 2', 'AnotherTest']);
});