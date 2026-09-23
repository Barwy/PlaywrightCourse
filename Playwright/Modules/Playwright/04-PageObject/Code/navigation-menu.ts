import { Page } from '@playwright/test';

//export lets us import this class in tests.

export class NavigationMenu {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async formLayoutsPage() {
        await this.page.getByText('Forms').click();
        await this.page.getByText('Form Layouts').click();
    }

}