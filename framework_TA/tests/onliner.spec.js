const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageObjects/pageFactory');


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.onliner.by/');
});

test.afterEach(async ({ browser }) => {
  const browserContext = await browser.newContext();
  await browserContext.clearCookies();
});

test.describe('Check onliner.by', () => {
  test(`1. Check Registration form - GUI test`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.checkRegistrationForm()
  })

  test(`2. Check Registration via Email- "Confirm your e-mail" window is displayed after filling out the form`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.registry();
    const resultOfRegistration = await String((await I.authentication.confermationWindow().textContent())).trim();

    await expect(resultOfRegistration).toContain('Подтвердите');
    await expect(page).toHaveURL('https://profile.onliner.by/registration');
  })

  test(`3. Check Registration through HomePage`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.goToSignInPage();
    await I.action.waitandClick(I.authentication.linkRegistration())
    await expect(page).toHaveURL('https://profile.onliner.by/registration');
  })

  test(`4. Check SignIn  form - GUI test`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.checkSignInForm();
  })

  test(`5. Check SignIn through HomePage - take a screenshot of the captcha after filling out the form`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.goToSignInPage();
    await I.authentication.signIn();
    await I.authentication.windowCaptcha().screenshot({ path: 'tests/captchaScreen/SignInThroughHomePage.png' });

  })

  test(`6. Check SignIn through Registration-page`, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://profile.onliner.by/registration');
    await I.action.waitandClick(I.authentication.linkSignInOnRegistrationPage());
    await I.authentication.signIn();
    await I.authentication.windowCaptcha().screenshot({ path: 'tests/captchaScreen/SignInThroughRegistration.png' });

  })

  test(`7. Check Forgot Password form - GUI test`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.checkForgotPasswordForm()
  })

  test(`8. Check Forgot Password of Registered User - take a screenshot of the captcha after filling out the form`, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://profile.onliner.by/recover-password');
    await I.authentication.forgotPasswordAuthorizedUser();
    await I.authentication.windowCaptcha().screenshot({ path: 'tests/captchaScreen/ForgotPassword.png' });

  })

  test(`9. Check Forgot Password of Unregistered User - "This user is not registered" message is displayed after filling out the form`, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://profile.onliner.by/recover-password');
    await I.authentication.forgotPasswordUnauthorizedUser('not_registered@gmail.com');
    const unregisteredUser = await I.authentication.errorMessage().textContent();
    await expect(unregisteredUser).toContain('Такой пользователь не зарегистрирован');
  })

  test(`10. Check Forgot Password  through HomePage`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.authentication.goToSignInPage();
    await I.action.waitandClick(I.authentication.linkForgotPassword());
    await expect(page).toHaveURL('https://profile.onliner.by/recover-password');
  })

  test(`11. Check navigation from/to HomePage`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.header.selectMenuTabByNumber(I.header.menuTabs(7));
    await expect(I.basePage.mainTitle()).toHaveText('Барахолка');
    await expect(page).not.toHaveURL('https://www.onliner.by/');
    await I.header.goToHomePage();
    await expect(page).toHaveURL('https://www.onliner.by/');
  })

  test(`12. Check all Headers Links`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.header.checkHeaderLinks();
  })

  test(`13. Check search by Catalog`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.search.getSearchByCatalog('Велосипеды');
    const resultOfSearch = await (await I.basePage.mainTitle().textContent()).toLowerCase();
    await expect(resultOfSearch).toContain('велосипеды');
  })

  test(`14. Check News-search by MainTitle text and URL`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.search.checkSearch('netflix', I.search.tabSearchByNumber(1), I.search.resultSearchByNumber(0));
    await expect(page.url()).toContain('netflix');
  })

  test(`15. Check quantity MenuBar Tabs`, async ({ page }) => {
    const I = new PageFactory(page);
    const menuBarTabs = I.homePage.menuBarTabs();
    await expect(menuBarTabs).toHaveCount(10);
  })

  test(`16. Check Title text of News on HomePage and Title text on related pages`, async ({ page }) => {
    const I = new PageFactory(page);
    const titleOfMainTilesTab = await I.homePage.getTitleTextMainTilesTab();
    await I.homePage.goToMainTilesTabPage();
    const newsMainTitle = await I.basePage.newsMainTitle().textContent();
    await expect(newsMainTitle).toBe(titleOfMainTilesTab);
  })

  test(`17. Check the navigation to Catalog page from header and link on HomePage.`, async ({ page }) => {
    const I = new PageFactory(page);
    await I.action.waitandClick(I.homePage.linkCatalog());
    const urlViaHomePage = await page.url();
    await I.header.goToHomePage();
    await I.action.waitandClick(I.header.catalogTab());
    const urlViaHeaderLink = await page.url();
    await expect(urlViaHomePage).toBe(urlViaHeaderLink);
  })

  test(`18. Check navigation to Item-page through Menu Catalog Tabs -> Menu Catalog Dropdown List -> Menu Catalog Tiles Tabs`, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://catalog.onliner.by/');
    await I.catalogPage.goToMenuCatalogItemPage(1, 0, 3)
    await expect(page).not.toHaveURL('https://catalog.onliner.by/');
  })

  test(`19. Check filters on Catalog-page`, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://catalog.onliner.by/smartwatch');
    await I.action.waitandClick(I.catalogPage.checkboxByProducerByNumber(0)); //Apple
    await expect(await I.catalogPage.checkboxByProducerByNumber(0).isChecked()).toBeTruthy();
    await I.action.waitandClick(I.catalogPage.checkboxByProducerByNumber(1)); //Xiaomi
    await expect(await I.catalogPage.checkboxByProducerByNumber(1).isChecked()).toBeTruthy();
    const filterBox1 = await I.catalogPage.filterBoxByNumber(0).textContent();
    await expect(filterBox1).toContain('Apple');
    const filterBox2 = await I.catalogPage.filterBoxByNumber(1).textContent();
    await expect(filterBox2).toContain('Xiaomi');
  })

  test(`20. Check navigation to Item page through Catalog-page `, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://catalog.onliner.by/mobile/apple');
    const linkName = await String((await I.catalogPage.linkNameItemByNumber(0).textContent())).trim();
    await I.action.waitandClick(I.catalogPage.linkItemByNumber(0));
    const itemTitle = await String((await I.catalogItemPage.itemCatalogTitle().textContent())).trim();
    await expect(linkName).toBe(itemTitle);

  })

  test(`21. Check add to compare - functionality `, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://catalog.onliner.by/smartwatch');
    await I.action.waitandClick(I.catalogPage.linkItemByNumber(0));
    await I.action.waitandClick(I.catalogItemPage.checkboxAddToCompareOnItemPage());
    const numberItemsInCompare = await I.comparison.buttonComparison().textContent();
    await expect(numberItemsInCompare).toContain('1');
  })

  test(`22. Check add to compare functionality - add 2 or more items`, async ({ page }) => {
    const I = new PageFactory(page);
    await page.goto('https://catalog.onliner.by/smartwatch');
    await I.action.waitandClick(I.catalogPage.linkItemByNumber(0));
    await I.action.waitandClick(I.catalogItemPage.checkboxAddToCompareOnItemPage());
    const numberItemsInCompare = await I.comparison.buttonComparison().textContent();
    await expect(numberItemsInCompare).toContain('1');
    await page.goBack();
    await I.action.waitandClick(I.catalogPage.linkItemByNumber(1));
    await I.action.waitandClick(I.catalogItemPage.checkboxAddToCompareOnItemPage());
    const numberItemsInCompare2 = await I.comparison.buttonComparison().textContent();
    await expect(numberItemsInCompare2).toContain('2');
  })

})