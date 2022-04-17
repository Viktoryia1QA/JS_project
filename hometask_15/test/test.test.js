const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const BasePage = require('../pageObject/basePage');
const BaseElements = require('../helpers/baseElements');
const HomePage = require('../pageObject/homePage');
const SearchComponents = require('../pageObject/pageComponents/searchComponents');
const config = require('../utils/config');


const baseElements = new BaseElements();
const homePage = new HomePage();
const searchComponents = new SearchComponents();

describe('Chromedriver tests', () => {

    before(async () => {
        await config();
    });

    after(async () => {
        await BasePage.close();
    });

    it(`Check Text 'ChromeDriver' in MainTitle`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        expect(await driver.getTitle()).to.contain('ChromeDriver');
    })


    it(`Check Text 'Chrome Extensions' in MainTitle`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        await baseElements.click(homePage.chromeExtensionsTab);

        expect(await driver.getCurrentUrl()).to.equal('https://chromedriver.chromium.org/extensions');
        expect(await driver.getTitle()).to.contain('Chrome Extensions');
    })

    it('Check search functionality', async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        await baseElements.click(searchComponents.searchButton);
        await baseElements.sendKeys(searchComponents.searchField, 'driver');
        await baseElements.click(searchComponents.submitSearchButton);
        await BasePage.sleep(2000);
        await driver.wait(until.elementIsVisible(searchComponents.resultsOnThisSite), 2000);
        const descriptions = await searchComponents.searchResultDescription;

        expect(await driver.getCurrentUrl()).to.contain('driver');
        expect(await descriptions[0].getText()).to.contain('driver');

    })

});