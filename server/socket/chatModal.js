var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/', function(err){
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

var chat = mongoose.model('Message', schema);

module.exports = chat;
