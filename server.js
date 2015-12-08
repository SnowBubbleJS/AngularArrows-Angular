var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Prompt = require('./promptController.js');
var app = express();

mongoose.connect('mongodb://bhtruong93:angular1@ds027835.mongolab.com:27835/prompts');
mongoose.connection.once('open', function() {
	console.log('Connected with MongoDB ORM - mongodb-orm');
});

//  Created for possible back-end storage of tutorial prompts data
// app.post('/prompts', function(req, res) {
//   console.log(path.join(__dirname, '/prompts.json'));
//   res.sendFile(path.join(__dirname, '/prompts.json'));
// });

app.get("/prompts", Prompt.findPrompts);
// app.post("/prompts", Prompt.postPrompts);

app.use(express.static(__dirname));


app.listen(3000);
