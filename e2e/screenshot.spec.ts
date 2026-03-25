import { test } from '@playwright/test';

test('screenshot current page', async ({ page }) => {
  const target = process.env.TARGET_PATH || 'home';
  const path = target === 'home' ? '/' : `/${target}`;
  await page.goto(`http://localhost:5173${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
});
