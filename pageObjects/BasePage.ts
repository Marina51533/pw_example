import { Page } from "playwright";

export abstract class BasePage {
  readonly infoMessage;
  readonly warningMessage;

  constructor(readonly page: Page) {
    this.infoMessage = this.page.locator(
      ".notifyjs-bootstrap-base.notifyjs-bootstrap-success"
    );
    this.warningMessage = this.page.locator(
      ".notifyjs-suggest-base.notifyjs-suggest-warning"
    );
  }

  async open(path: string) {
    await this.page.goto(path);
  }
}
