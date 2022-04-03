const fse = require('fs-extra');

fse.ensureDirSync('./firstFolder');
fse.ensureDirSync('./secondFolder');

fse.ensureFileSync('./firstFolder/file.txt');

fse.moveSync('./firstFolder/file.txt', './secondFolder/file.txt');

fse.removeSync('./secondFolder/file.txt');

fse.removeSync('./firstFolder');
fse.removeSync('./secondFolder');

console.log('lesson 1 is finished');


// const second = () => {
//     console.log('Hello there!');
//   }
//   const first = () => {
//     console.log('Hi there!');
//     second();
//     console.log('The End');
//   }
//   first();