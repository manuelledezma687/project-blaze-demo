import { Page, expect } from "@playwright/test";

export class BasePage {

    protected readonly page: Page

    constructor(page:Page) {
        this.page = page;
    }

    async loadWeb(url: string) {
        await this.page.goto(url);
    }

    async clickOn(selector: string) {
        await this.page.click(selector);
    }

    async fillField(selector: string, value: string) {
        await this.page.locator(selector).fill(value);
    }

    async selectOpt(selector: string, value: string) {
        await this.page.locator(selector).selectOption(value);
    }

    async expectVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }
}