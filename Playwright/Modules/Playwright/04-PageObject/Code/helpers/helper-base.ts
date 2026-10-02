import { Page } from '@playwright/test';

export class HelperBase {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async getPopUpMessage() {
        //This message gets popup message and validates it.
        return 'This is popup message';
    }
}