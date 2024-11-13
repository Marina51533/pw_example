import { test, expect, devices } from "@playwright/test";
import { HomePage } from "../pageObjects/pages/HomePage";
import { AxeAccessibilityScan } from "../pageObjects/helpers/accessibilityScan";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open("/");
  await homePage.denyCoockiesBtn.click();
});

test.describe("Playwright Testing Example: accessibility testing", () => {
  test("Check accessibility of the main page", async ({ page }) => {
    const result = await AxeAccessibilityScan(page);
    expect(result.violations.length).toBe(0);
  });
});
