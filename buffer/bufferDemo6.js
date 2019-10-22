/**
 * 裁剪缓冲区，缓冲区的长度
 */
let buf1 = Buffer.from('0123456789');
let buf2 = buf1.slice(1,3);
console.log(buf2.toString());
console.log('缓冲区长度：'+buf1.length);