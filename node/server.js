var connect  = require('connect');
var socketio = require('./Socket.IO-node');

connect(
  connect.static(__dirname + '/../public')
).listen(3000);

