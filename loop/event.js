/**
 * setTimeout(function, timeout)，指定时间后执行这段函数
 */

const EventEmitter = require('events').EventEmitter;
let event = new EventEmitter();
event.on('some_event', function () {
    console.log("some_event事件触发");
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);