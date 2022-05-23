
class BaseElements {
    constructor(page) {
        global.page = page;
    }

    async waitandClick(element) {
        await element.waitFor('visible');
        await element.click();
    }
    async changeVisibility(element) {
        await element.setAttribute('visibility', 'visible');
    }
    async getText(element) {
        await element.waitFor('visible');
        return element.textContent();
    }
}

module.exports = BaseElements;