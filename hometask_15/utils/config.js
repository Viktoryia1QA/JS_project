async function config(width = 1920, height = 768,  waitTime = 1000) {
    await driver.manage().setTimeouts({ implicit: waitTime });
    await driver.manage().window().setRect({ width: width, height: height });
}

module.exports = config;