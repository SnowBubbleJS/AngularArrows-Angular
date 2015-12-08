var express = require('express');
var app = express();
var path = require('path');

//  Created for possible back-end storage of tutorial prompts data
// app.post('/prompts', function(req, res) {
//   console.log(path.join(__dirname, '/prompts.json'));
//   res.sendFile(path.join(__dirname, '/prompts.json'));
// });

app.use(express.static(__dirname));


app.listen(3000);
