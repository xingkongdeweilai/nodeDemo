const EventEmitter = require('events').EventEmitter;
let event = new EventEmitter();
event.on('error', function () {
    console.log('遇到异情');
})
event.emit('error');