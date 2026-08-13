import { test } from '@playwright/test'

test.beforeEach('First test', async ({ page }) => { //this will be executed for each test in the file.
    await page.goto('https://playground.bondaracademy.com'); 
    await page.getByText('Forms').click();
})

test.describe('suite Forms', () => {
    test.beforeEach('First test', async ({ page }) => { //this will be executed only for thests in this suite
        await page.getByText('Forms').click();
    })

    test('First test', async ({ page }) => {
        await page.getByText('Datepicker').click();
    })

    test('Second test', async ({ page }) => {
        await page.getByText('Form Layouts').click();
    })
})

test.describe('suite Auth', () => {
    test.beforeEach('First test', async ({ page }) => { //this will be executed only for thests in this suite
        await page.getByText('Auth').click();
    })
    test('First test', async ({ page }) => {
        await page.getByText('Login').click();
    })

    test('Second test', async ({ page }) => {
        await page.getByText('Register').click();
    })
})