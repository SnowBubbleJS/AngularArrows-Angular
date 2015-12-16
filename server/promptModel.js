var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prompt = new Schema({
  0: {
    type: String
  }
});

module.exports = mongoose.model('Prompt', prompt);
