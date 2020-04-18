var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/a-chat-messsages', function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('MonoDB Connected');
  }
});

var schema = mongoose.Schema({
  userName : String,
  msg : String,
  created : { type: Date, default: Date.now}
});

var Chat = mongoose.model('Message', schema, 'chats');

module.exports = chat;
