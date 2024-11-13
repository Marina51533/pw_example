import { test, expect, devices } from "@playwright/test";
import { HomePage } from "../pageObjects/pages/HomePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open("/");
  await homePage.denyCoockiesBtn.click();
});

test.describe("Playwright Web Testing Example: assertions, snapshot testing, mobile view", () => {
  test("Main page should contain necessary element", async ({ page }) => {
    const homePage = new HomePage(page);
    expect(homePage.startFreeBtn).toBeVisible();
  });

  test("Should match header snapshot", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.pageHeader).toHaveScreenshot("header-snapshot.png");
  });

  test("Should match full page snapshot", async ({ page }) => {
    await expect(page).toHaveScreenshot("full-page-snapshot.png");
  });

  test("the main page should have title, description", async ({ page }) => {
    const homePage = new HomePage(page);

    // Check the title
    const pageTitle = await page.title();
    expect(pageTitle).not.toBe("");
    console.log("Page Title:", pageTitle);

    // Check the meta description text from the HomePage object
    const metaDescriptionText = await homePage.metaDescription;
    expect(metaDescriptionText).not.toBeNull();
    expect(metaDescriptionText).not.toBe("");
    console.log("Meta Description:", metaDescriptionText);
  });
});

//npm run test:headed
