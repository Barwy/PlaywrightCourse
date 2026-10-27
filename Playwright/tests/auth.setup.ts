import { test as setup, expect } from '@playwright/test';
import path from 'path'; //this may require installation of a new package 
//and further configuration in tsconfig.json file.

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    //log in
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByText('Sign in').click();
    await page.getByRole('textbox', { name: 'Email' }).fill('TesterPW13@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    
    //confirm you logged in
    await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible();

    //capture the authenticated step and save it to user.json from line 5 (up above).
    await page.context().storageState({ path: authFile });
});