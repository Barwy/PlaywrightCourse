import { Page } from '@playwright/test';

//export lets us import this class in tests.

export class NavigationMenu {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Form Layouts').click();
    }

    async datePickerPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('DatePicker').click();
    }

    async toasterPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Toastr').click();
    }

    async toolTipPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Tooltip').click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data');
        await this.page.getByText('Smart Table').click();
    }

    //This method checks if element is in expanded state and expands it if not.
    private async selectGroupMenuItem(groupMenuTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupMenuTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedState == 'false') {
            await groupMenuItem.click();
        }

    }

}