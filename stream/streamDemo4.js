/**
 * 链式流压缩
 */
let fs = require('fs');
let zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('./stream/input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./stream/input.txt.gz'));

console.log('文件压缩完成');