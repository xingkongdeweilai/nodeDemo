/**
 * 拷贝缓冲区
 */
let buf1 = Buffer.from('0123456789');
let buf2 = Buffer.from('abcd');
//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);
console.log(buf1.toString());