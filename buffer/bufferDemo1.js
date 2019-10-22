/**
 * 创建Buffer对象
 */
const buf = Buffer.from('你好', 'utf8');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf8'));