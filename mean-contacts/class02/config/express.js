var express = require('express');
var load = require('express-load');

//var home = require('../app/routes/index')

module.exports = function () {
  var app = express();

  app.set('port', 3000);
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //middleware
  app.use(express.static('./public'));
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app;
}
