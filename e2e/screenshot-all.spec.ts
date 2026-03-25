import { test } from '@playwright/test';

const pages = [
  { name: 'home', path: '/' },
  { name: 'map', path: '/map' },
  { name: 'list', path: '/list' },
  { name: 'filter', path: '/filter' },
  { name: 'info', path: '/info' },
];

for (const p of pages) {
  test(`screenshot ${p.name}`, async ({ page }) => {
    await page.goto(`http://localhost:5173${p.path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
  });
}
