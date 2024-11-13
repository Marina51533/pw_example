import { Page } from "@playwright/test";
import axe from "axe-core";

export async function AxeAccessibilityScan(page: Page) {
  // Inject the axe-core script
  await page.addScriptTag({ path: require.resolve("axe-core") });

  // Run the accessibility scan
  const result = await page.evaluate(async () => {
    if (typeof window.axe === "undefined") {
      throw new Error("Axe-core failed to load on the page");
    }
    return await window.axe.run();
  });

  // Process and print only essential information
  if (result.violations.length > 0) {
    console.log(`Found ${result.violations.length} accessibility violations:`);
    result.violations.forEach((violation) => {
      console.log(`ID: ${violation.id}`);
      console.log(`Impact: ${violation.impact}`);
      console.log(`Description: ${violation.description}`);
      console.log(`Help URL: ${violation.helpUrl}`);
      console.log("Affected nodes:");
      violation.nodes.forEach((node) => {
        console.log(` - HTML: ${node.html}`);
        console.log(` - Target: ${node.target.join(", ")}`);
      });
      console.log("---"); // Separator between violations
    });
  } else {
    console.log("No accessibility violations found!");
  }

  return result;
}
