import { test, expect, devices } from "@playwright/test";
import { HomePage } from "../pageObjects/pages/HomePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open("/");
  await homePage.denyCoockiesBtn.click();
});


  // Mobile test example
  test.use({ ...devices["iPhone 12"] });

  test("Mobile view: should display necessary element, snapshop testing", async ({ page }) => {
    const homePage = new HomePage(page);
    // Assertions specific to mobile layout, if needed
    await expect(homePage.pageHeader).toBeVisible();
    // Take a screenshot of the mobile view
    await expect(page).toHaveScreenshot("mobile-view-snapshot.png");
  });

