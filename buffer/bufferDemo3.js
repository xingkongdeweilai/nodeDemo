/**
 * Buffer转json
 */
const buf = Buffer.from([0*1, 0*2, 0*3, 0*4, 0*5]);
const json = JSON.stringify(buf);

console.log(json);