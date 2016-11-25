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

config.configDB();

mongoose.connect(process.env.MONGODB_CONNECTION);

app.use(bodyParser.json());

//Config Routes
app.get('/api/input', function (req, res) {

  inputController.find(req.query, function (err, inputs) {

      if(err){
        console.log(err);
        res.status(500).json(err);

      }else{
        res.status(200).json(inputs)
      }
  })
});

app.post('/api/input', function (req, res) {

  inputController.create(req.body, function (err, input) {

      if(err){
        console.log(err);
        res.status(500).json(err);

      }else{
        res.status(200).json(input)
      }
  })
});

//Server
app.listen(port, function () {

  console.log('Listening on port 3000');

});
