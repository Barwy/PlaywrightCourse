import { test, expect } from '@playwright/test';
import tags from '../Modules/Playwright/05-API/testData/tags.json'

// This was added to 'api tests' test to avoid data clash.
// test.beforeEach(async ({ page }) => {
//     await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
//         await route.fulfill ({
//             json: tags //this takes contents of the tags.json file;
//         })
//     })
// await page.route('*/**/api/articles*', async route => {
//     const response = await route.fetch();
//     const responseJSON = await response.json();
//     responseJSON.articles[0].title = 'This is a mock article title!';
//     responseJSON.articles[0].description = 'This is a mock article description!';
//     await route.fulfill({
//         json: responseJSON
//     })
// });

//     await page.goto('https://conduit.bondaracademy.com/');
// });


test('api tests', async ({ page }) => {
    await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
        await route.fulfill({
            json: tags //this takes contents of the tags.json file;
        })
    })
    await page.route('*/**/api/articles*', async route => {
        const response = await route.fetch();
        const responseJSON = await response.json();
        responseJSON.articles[0].title = 'This is a mock article title!';
        responseJSON.articles[0].description = 'This is a mock article description!';
        await route.fulfill({
            json: responseJSON
        })
    });

    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('.navbar-brand')).toHaveText(/conduit/);
    await expect(page.locator('.sidebar .tag-pill')).toContainText(['Test', 'Test 2', 'AnotherTest']);
    await expect(page.locator('.preview-link h1').first()).toContainText('This is a mock article title!');
    await expect(page.locator('.preview-link p').first()).toContainText('This is a mock article description!');
});

test('Delete article', async ({ page, request }) => {
    const loginResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data:  //data is payload from Postman or webpage.
        //payload with braces goes here.
        {
            user: {
                email: "TesterPW13@test.com",
                password: "Password"
            }
        }
    })
    expect(loginResponse.status()).toEqual(200);
    const responseLoginJSON = await loginResponse.json();
    const token = responseLoginJSON.user.token; //This can be found in Chrome, 'response' tab, where rest of the API call is.
    console.log(token); // print the login token.

    const newArticleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: {
            'article': {
                "title": "Test Article Title",
                "description": "Test Article Description",
                "body": "Test Article Body",
                "taglist": []
            }
        },
        headers: {
            authorization: `Token ${token}`
        }
    })
    expect(newArticleResponse.status()).toEqual(201);

     await page.goto('https://conduit.bondaracademy.com/');
     await page.getByText('Sign in').click();
     await page.getByRole('textbox', {name: 'Email'}).fill('TesterPW13@test.com');
     await page.getByRole('textbox', {name: 'Password'}).fill('Password');
     await page.getByRole('button', {name: 'Sign in'}).click();

     await expect(page.locator('.preview-link h1').first()).toContainText('Test Article Title');
     await page.getByText('Test Article Title').click();
     await page.getByRole('button', {name: 'Delete Article'}).first().click();
     await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0'); //wait for articles to load before making a negative assertion.
     await expect(page.locator('.preview-link h1').first()).not.toContainText('Test Article Title'); //using a negative assertion may result in a false positive result.
});
