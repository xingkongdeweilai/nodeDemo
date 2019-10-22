/**
 * 缓冲区连接
 */
let buf1 = Buffer.from('hello');
let buf2 = Buffer.from('world');
let buf3 = Buffer.concat([buf1, buf2]);
console.log('buf3内容：'+buf3);