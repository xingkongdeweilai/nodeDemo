/**
 * 写入流
 */
const fs = require('fs');

// 创建一个可以写入的流，写入到文件 output.txt 中
let writeStream = fs.createWriteStream('./stream/output.txt');
// 使用 utf8 编码写入数据
writeStream.write('hello world你好世界','UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, and error
writeStream.on('data', function () {
    console.log('触发data事件');
});

writeStream.on('end', function () {
    console.log('触发end事件');
});

writeStream.on('error', function (err) {
    console.log('触发error事件,err:'+err.stack);
});

writeStream.on('finish', function () {
    console.log('写入完成');
});

console.log('程序执行完毕');