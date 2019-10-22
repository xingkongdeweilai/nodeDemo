/**
 * 一个事件触发两个监听器
 */

const EventEmitter = require('events').EventEmitter;
let event = new EventEmitter();
event.on('someEvent', function (arg1, arg2) {
    console.log("listener1被触发", arg1, arg2);
});

event.on('someEvent', function (arg1, arg2) {
    console.log('listener2被触发', arg1, arg2);
});

event.emit('someEvent', 'arg1参数', 'arg2参数');