//Packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config');

//Controllers
var inputController = require('./controllers/input.controller');

//Configs
var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.json());

//Config Routes
app.get('/api/input', function (req, res) {

  inputController.find(req.query, function (err, inputs) {
      res.json(inputs);
  })
});

//Server
app.listen(port, function () {

  console.log('Listening on port 3000');

});
