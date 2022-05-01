const PageFactory = require('../pageObjects/pageFactory');
const { expect } = require('chai');


const I = new PageFactory();

describe(' WebdriverIO  tests', () => {
    it(`1. Check Text 'WebdriverIO ' in MainTitle`, async () => {
        await I.homePage.navigate('https://webdriver.io/');

        await expect(await browser.getTitle()).to.contain('WebdriverIO');
        await expect(await browser.getUrl()).to.contain('webdriver');
    })

    it(`2. Check subTitle on HomePage`, async () => {
        await I.homePage.navigate('https://webdriver.io/');

        await expect(await I.homePage.subTitle.getText()).to.contain('Next-gen browser and mobile automation test framework for Node.js');

    })


    it(`3. Check Text 'Blog ' in MainTitle`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.header.blogButton);

        await expect(await browser.getTitle()).to.contain('Blog');
        await expect(await browser.getUrl()).to.contain('blog');
    })

    it(`4. Check searching functionality`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.searchComponents.searchButton);
        await I.searchComponents.getSearch('Expect');

        await expect(await browser.getUrl()).to.contain('expect');

        console.log(await I.searchComponents.searchResultTitle.getText());

        await expect(await I.searchComponents.searchResultTitle.getText()).to.contain('Expect');

    })

    it(`5. Check api-element "click" in API tab`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.header.apiButton);
        await I.baseElement.click(I.apiPage.tabElement);
        await I.baseElement.click(I.apiPage.elemClick);

        await expect(await browser.getUrl()).to.contain('click');

        console.log(await I.apiPage.headerSelector.getText());

        await expect(await I.apiPage.headerSelector.getText()).to.contain('click');

    })


    it(`6. Check switch mode: Light to Dark`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.header.apiButton);
        await I.baseElement.click(I.header.modeSwitcherButton);

        console.log(await I.header.getTheme());

        await expect(await I.header.getTheme()).to.contain('dark');
    })

});