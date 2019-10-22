const events = require('events');
let eventEmitter = new events.EventEmitter();

//监听器#1
let litener1 = function () {
    console.log("监听器listener1执行");
};

//监听器#2
let litener2 = function () {
    console.log("监听器listener2执行");
};

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', litener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', litener2);

let eventLisenerNum = eventEmitter.listenerCount('connection');
console.log('共有'+eventLisenerNum+'个监听器');

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', litener1);
console.log('listener1被移除');

// 触发连接事件
eventEmitter.emit('connection');

eventLisenerNum = eventEmitter.listenerCount('connection');
console.log('共有'+eventLisenerNum+'个监听器');