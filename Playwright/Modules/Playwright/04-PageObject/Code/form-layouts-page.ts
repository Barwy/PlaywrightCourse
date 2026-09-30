//Parameterized Page Object Model

import { Page } from '@playwright/test';

export class FormLayoutsPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' });
        await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridForm.getByLabel(optionText).check({ force: true });
        await usingTheGridForm.getByRole('button', { name: 'Sign in' }).click();
    }

    /**
     * Slash and ** create a JSDoc comment block. This is a good practice to document your code.
     * This method submits the Inline form with the provided parameters.
     * @param fullName - The full name to be filled in the form.
     * @param email - The email address to be filled in the form.
     * @param rememberMeCheck  - A boolean indicating whether to check the "Remember me" checkbox.
     */
    async submitUsingInlineForm(fullName: string, email: string, rememberMeCheck: boolean) {
         const inlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
         await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(fullName);
         await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
        if (rememberMeCheck) {
            await inlineForm.getByRole('checkbox').check({ force: true });
        }
        await inlineForm.getByRole('button', { name: 'Submit' }).click();
}
}