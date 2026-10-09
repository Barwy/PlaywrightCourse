import { test } from '@playwright/test';
import { PageManager } from '../Modules/Playwright/04-PageObject/Code/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
});

test('Navigate to Form Layouts Page', async ({ page }) => {
    //we create a new instance of the class and are required to pass page as an argument.
    const pom = new PageManager(page);
    await pom.navigationMenu.formLayoutsPage();
    await pom.navigationMenu.datePickerPage();
});

test('Parametrized page object methods', async ({ page }) => {
    const pom = new PageManager(page);
    await pom.navigationMenu.formLayoutsPage();
    await pom.formLayoutsPage.submitUsingTheGridForm('test@example.com', 'password123', 'Option 1');
    await pom.formLayoutsPage.submitUsingInlineForm('John Doe', 'johnd@example.com', false);
    await pom.navigationMenu.datePickerPage();
    await pom.datePicket.selectCommonDatePickerDateFromToday(5);
    await pom.datePicket.selectDatePickerWithRangeFromToday(4, 8);
});