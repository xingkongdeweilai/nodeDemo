/**
 * 写入缓冲区
 */
let buf = Buffer.alloc(256);
let len = buf.write('hello world');
console.log(buf.toString());
console.log('写入的字符数:'+len);