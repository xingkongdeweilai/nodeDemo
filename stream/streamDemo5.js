/**
 * 链式流解压
 */
let fs = require('fs');
let zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('./stream/input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./stream/input2.txt'));
console.log('文件解压完成');