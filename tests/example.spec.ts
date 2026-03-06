import { test, expect } from '@playwright/test';

test('has title vasup', async ({ page }) => {
  await page.goto('https://www.vasup.co.th/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/VASUP/);
});
