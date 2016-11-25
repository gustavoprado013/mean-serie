var Input = require('../models/inputs');

module.exports.find = function (query, done) {

  Input.find(query, done);

};

module.exports.create = function (obj, done) {

  if(obj.type == "D"){
    obj.value = obj.value * -1;
  }

  var input = new Input(obj);

  input.save(function (err) {
    done(err, input);
  });

}
