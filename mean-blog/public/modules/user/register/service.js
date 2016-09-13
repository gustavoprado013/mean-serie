angular.module('mean-blog.user').factory('users', function () {

  var users = [];
  var id = 0;

  var register = function (user) {
    id++;
    user.id = id;
    users.push(user)
  }

  var auth = function (user) {
    users.find(function (obj) {
      return obj.login === user.login && obj.password === user.password
    })
  }

  return {
    register: register,
    auth: auth
  }

});
