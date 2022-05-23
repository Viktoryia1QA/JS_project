const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.onliner.by/');
  await page.locator('.auth-bar__item--text').waitFor('visible');
  await page.locator('.auth-bar__item--text').click();
  await page.locator('[placeholder="Ник или e-mail"]').click();
  await page.locator('[placeholder="Ник или e-mail"]').fill('itry.anotherb@gmail.com');
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill('Qwerty123!');
  await page.locator('button:has-text("Войти")').click();
  await page.frameLocator('iframe[role="presentation"]').locator('span[role="checkbox"]').click();
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
};