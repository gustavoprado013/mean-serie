var Input = require('../models/inputs');

module.exports.find = function (query, done) {

  Input.find(query, done);

}
