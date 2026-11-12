import {test as base} from '@playwright/test'
import { PageManager } from '../Modules/Playwright/04-PageObject/Code/pageManager'

type FixtureTypes = {
    pom: PageManager;
}

export const test = base.extend<FixtureTypes>({
    pom: async({page}, use) => {
        await page.goto('/'); //page address is configured elsewhere in the project, so a placeholder is used.
        const manager = new PageManager(page);
        await use(manager);
    }
})
