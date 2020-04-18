var mongoose = require('mongoose');

var schema = mongoose.Schema({
  userName : String,
  msg : String,
  created : { 
    type: Date, 
    default: Date.now
  }
});

var Chat = mongoose.model('Chat', schema, 'chats');

module.exports = Chat;
