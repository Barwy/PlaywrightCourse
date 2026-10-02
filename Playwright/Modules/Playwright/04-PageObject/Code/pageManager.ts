import { Page } from '@playwright/test';
import { NavigationMenu } from './navigation-menu';
import { FormLayoutsPage } from './form-layouts-page';
import { DatePicker } from './datepicker-page';

export class PageManager {
    readonly page: Page;
    readonly navigationMenu: NavigationMenu;
    readonly formLayoutsPage: FormLayoutsPage;
    readonly datePicket: DatePicker;

    constructor(page: Page) {
        this.page = page;
        this.navigationMenu = new NavigationMenu(page);
        this.formLayoutsPage = new FormLayoutsPage(page);
        this.datePicket = new DatePicker(page);
    }
}

//Page Manager concept with getters:
export class PageManagerWithGetters {
    constructor(private page: Page) { }

    get navigationMenu() {
        return new NavigationMenu(this.page);
    }

    get formLayoutsPage() {
        return new FormLayoutsPage(this.page);
    }

    get datePicket() {
        return new DatePicker(this.page);
    }
}