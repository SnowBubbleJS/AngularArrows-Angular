var express = require('express');
var compression = require('compression');
var path = require('path');
var mongoose = require('mongoose');
var Prompt = require('./promptController.js');
var app = express();
var mongoURI = 'mongodb://' + process.env.ID + ':' + process.env.PASS + '@ds029615.mongolab.com:29615/promptsv2';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
	console.log('Connected with MongoLab');
});
app.use(compression());
app.get("/prompts", Prompt.findPrompts);
// app.post("/prompts", Prompt.postPrompts);
console.log(path.join(__dirname, "../"));
app.use(express.static(path.join(__dirname, "../")));

app.listen(process.env.PORT || 3000);

// @ds027835.mongolab.com:27835/prompts
// mongodb://<dbuser>:<dbpassword>@ds029615.mongolab.com:29615/promptsv2
