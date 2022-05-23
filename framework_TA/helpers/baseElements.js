
class BaseElements {
    constructor(page) {
        global.page = page;
    }

   async waitandClick(element){
       await element.waitFor('visible');
       await element.click();
   }
}

module.exports = BaseElements;