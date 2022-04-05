const { Builder } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();


describe(`new tests`, function() {
    it(`new test`, async () => {
        await driver.get('https://www.google.com/');
        await driver.sleep(5000);
        await driver.close();
    })
})