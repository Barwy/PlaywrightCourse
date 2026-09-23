import { test } from '@playwright/test';
//Import the page object class.
import { NavigationMenu } from '../Modules/Playwright/04-PageObject/Code/navigation-menu';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
});

test('Navigate to Form Layouts Page', async ({ page }) => {
    //we create a new instance of the class and are required to pass page as an argument.
    const navigateTo = new NavigationMenu(page);
    await navigateTo.formLayoutsPage();
});