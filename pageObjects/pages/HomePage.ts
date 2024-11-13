import { BasePage } from "../BasePage";

export class HomePage extends BasePage {
  readonly denyCoockiesBtn = this.page.getByRole("button", { name: "Deny" });
  readonly startFreeBtn = this.page.locator(
    ".uc-blog-hero__buttons a span:has-text('Start free')"
  );
  readonly pageHeader = this.page.locator("#header")
  readonly metaDescription = this.page.locator("meta[name='description']").getAttribute(
    "content"
  );

  async open(path: string) {
    await this.page.goto(path);
  }
}
