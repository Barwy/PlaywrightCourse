import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fakestore.testelka.pl/');
  await page.getByRole('link', { name: 'Przejdź do kategorii produktu Windsurfing' }).click();
  await page.getByRole('link', { name: 'Egipt - El Gouna Egipt – El' }).click();
  await page.getByRole('button', { name: 'Dodaj do koszyka', exact: true }).click();
});