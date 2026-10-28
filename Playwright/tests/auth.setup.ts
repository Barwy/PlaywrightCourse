import { test as setup, expect } from '@playwright/test';
import path from 'path';    //this may require installation of a new package and further configuration in tsconfig.json file.
import fs, { read } from 'fs';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page, request }) => {
    //log in
    if (fs.existsSync(authFile)) {
        const loginResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
            data:
            {
                user: {
                    email: "TesterPW13@test.com",
                    password: "Password"
                }
            }
        })
        expect(loginResponse.status()).toEqual(200);
        const responseLoginJSON = await loginResponse.json();
        const token = responseLoginJSON.user.token;

        //we parse the the file to json so we can read it.
        const storageStateFile = JSON.parse(fs.readFileSync(authFile, 'utf-8'));
        //We navigate to the value of token inside the file and update it.
        storageStateFile.origins[0].localStorage[0].value = token;
        //We write the updated vlue to the file with data we convert to string.
        //We also add modifiers to make it look like it does originally, rather than a single line of text.
        //2 - number of spaces we want to add for formatting.
        fs.writeFileSync(authFile, JSON.stringify(storageStateFile, null, 2))
    } else {
        await page.goto('https://conduit.bondaracademy.com/');
        await page.getByText('Sign in').click();
        await page.getByRole('textbox', { name: 'Email' }).fill('TesterPW13@test.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('Password');
        await page.getByRole('button', { name: 'Sign in' }).click();
        //confirm you logged in
        await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible();
        //capture the authenticated step and save it to user.json from line 5 (up above).
        await page.context().storageState({ path: authFile });
    }
});