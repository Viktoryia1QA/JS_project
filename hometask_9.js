const fse = require('fs-extra');

fse.ensureDir('./firstFolder', () => {
    console.log('firstFolder is created');
    fse.ensureDir('./secondFolder', () => {
        console.log('secondFolder is created');
        fse.ensureFile('./firstFolder/file.txt', () => {
            console.log('file.txt  is created in firstFolder');
            fse.move('./firstFolder/file.txt', './secondFolder/file.txt', () => {
                console.log('file.txt is moved to secondFolder');
                fse.remove('./secondFolder/file.txt', () => {
                    console.log('file.txt is removed from secondFolder');
                    fse.remove('./firstFolder', () => {
                        console.log('firstFolder is removed');
                        fse.remove('./secondFolder', () => {
                            console.log('secondFolder is removed');
                            console.log('lesson 9 is finished');
                        });
                    });
                });
            });
        });
    });
});
