/**
 * 从流中读取数据
 */
const fs = require('fs');
let data = '';

// 创建可读流
let readStream = fs.createReadStream('./stream/input.txt');
// 设置编码为 utf8。
readStream.setEncoding('UTF8');
// 处理流事件 --> data, end, and error
readStream.on('data', function (chunk) {
    console.log('触发data事件，chunk:'+chunk);
    data += chunk;
    console.log('data:'+data);
});
readStream.on('end', function () {
    console.log('触发end事件,data:'+data);
});
readStream.on('error', function (err) {
    console.log('触发error事件，err:'+err.stack);
});
console.log("程序执行完毕");