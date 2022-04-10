const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

// const driver = new Builder().forBrowser('chrome').build();

describe(`ChromeDriver tests`, function () {
    let driver;
    beforeEach(async () => {
        driver = new Builder().forBrowser('chrome').build();
    });
    afterEach(async() => {
        await driver.close();
    })

    it(`Check Text 'ChromeDriver' in MainTitle`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        expect(await driver.getTitle()).to.contain('ChromeDriver');
    })

    // it.skip(`check Text 'ChromeDriver' on the Home-page`, async () => {
    //     await driver.get('https://chromedriver.chromium.org/home');
    //     const checkTextMainTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/*[contains(text(), ChromeDriver)]'));
    //     expect(await checkTextMainTitle.getText()).to.contain('ChromeDriver');
    // })

    it(`Check Text 'Chrome Extensions' in MainTitle`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.manage().window().maximize();
        const chromeExtensionsTab = await driver.findElement(By.xpath('//*[@id="WDxLfe"]//*[contains(@href, "/extensions")]/ancestor::li'));
        await chromeExtensionsTab.click();
        expect(await driver.getCurrentUrl()).to.equal('https://chromedriver.chromium.org/extensions');
        expect(await driver.getTitle()).to.contain('Chrome Extensions');
    })

    it('Check search functionality', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const searchButton = await driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
        await driver.wait(function () {
            return searchButton.isDisplayed();
        }, 1000);
        await searchButton.click();
        const searchField = await driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));

        await searchField.sendKeys('driver');
        const submitSearchButton = await driver.findElement(By.xpath('//*[@class="U26fgb mUbCce fKz7Od i3PoXe M9Bg4d"]'));

        await submitSearchButton.click();
        await driver.sleep(2000);
               
        const searchResultDescription = await driver.findElements(By.css('.yDWqEe'));
        // await driver.wait(until.elementIsVisible(searchResultDescription), 5000);
        
        expect(await driver.getCurrentUrl()).to.contain('driver');
        expect(await searchResultDescription[0].getText()).to.contain('driver');
    })
})