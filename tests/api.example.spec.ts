import { test, expect } from "@playwright/test";

test("Validate Usercentrics rule set API", async ({ request }) => {
  const url =
    "https://v1.api.service.cmp.usercentrics.eu/latest/ruleSetData?id=NFEcTLx7a";

  const response = await request.get(url);

  // Response status
  expect(response.status()).toBe(200);

  // To ensure it's JSON
  expect(response.headers()["content-type"]).toContain("application/json");

  const responseData = await response.json(); // Parse the JSON response

  // Check for the actual structure in the JSON response
  expect(responseData).toHaveProperty("defaultRule");
  expect(responseData).toHaveProperty("name");
  expect(responseData).toHaveProperty("ruleSetId");
  expect(responseData).toHaveProperty("rules");

  // Additional validation for the 'rules' array
  expect(Array.isArray(responseData.rules)).toBe(true);
  expect(responseData.rules.length).toBeGreaterThan(0);
  expect(responseData.rules[0]).toHaveProperty("locations");
  expect(responseData.rules[0]).toHaveProperty("name");
  expect(responseData.rules[0]).toHaveProperty("settingsId");

  console.log("API Response:", responseData);
});
