const PageFactory = require('../pageObjects/pageFactory');


const I = new PageFactory();

describe(' WebdriverIO  tests', () => {
    it(`1. Check Text 'WebdriverIO ' in MainTitle`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await expect(browser).toHaveTitleContaining('WebdriverIO');
        await expect(browser).toHaveUrlContaining('webdriver');
    })

    it(`2. Check subTitle on HomePage`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await expect(I.homePage.subTitle).toBeExisting();
        await expect(I.homePage.subTitle).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

    })


    it(`3. Check Text 'Blog ' in MainTitle`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.header.blogButton);
        await expect(browser).toHaveTitleContaining('Blog');
        await expect(browser).toHaveUrlContaining('blog');
    })

    it(`4. Check searching functionality`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.searchComponents.searchButton);
        await I.searchComponents.getSearch('Expect');
        await expect(browser).toHaveUrlContaining('expect');
        await expect(I.searchComponents.searchResultTitle).toHaveText('Expect');

    })

    it(`5. Check api-element "click" in API tab`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.header.apiButton);
        await I.baseElement.click(I.apiPage.tabElement);
        await I.baseElement.click(I.apiPage.elemClick);

        await expect(browser).toHaveUrlContaining('click');

        console.log(await I.apiPage.headerSelector.getText());

        //Test is failed, but in console-log is displayed right expected result. 
        //Expected: "click"
        // Received: undefined

        await expect(await I.apiPage.headerSelector.getText()).toHaveText('click');

    })


    it(`6. Check switch mode: Light to Dark`, async () => {
        await I.homePage.navigate('https://webdriver.io/');
        await I.baseElement.click(I.header.apiButton);
        await I.baseElement.click(I.header.modeSwitcherButton);

        console.log(await I.header.getTheme());

        //Test is failed, but in console-log is displayed right expected result. 
        //Expected: "click"
        // Received: undefined

        await expect(await I.header.getTheme()).toHaveText('dark');
    })

});