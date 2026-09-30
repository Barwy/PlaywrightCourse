import { test } from '@playwright/test';
//Import the page object class.
import { NavigationMenu } from '../Modules/Playwright/04-PageObject/Code/navigation-menu';
import { FormLayoutsPage } from '../Modules/Playwright/04-PageObject/Code/form-layouts-page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
});

test('Navigate to Form Layouts Page', async ({ page }) => {
    //we create a new instance of the class and are required to pass page as an argument.
    const navigateTo = new NavigationMenu(page);
    await navigateTo.formLayoutsPage();
    await navigateTo.datePickerPage();
});

test('Parametrized page object methods', async ({ page }) => {
    const navigateTo = new NavigationMenu(page);
    const formLayoutsPage = new FormLayoutsPage(page);
    await navigateTo.formLayoutsPage();
    await formLayoutsPage.submitUsingTheGridForm('test@example.com', 'password123', 'Option 1');
    await formLayoutsPage.submitUsingInlineForm('John Doe', 'johnd@example.com', false);
});