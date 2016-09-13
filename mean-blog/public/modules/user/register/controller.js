angular.module('mean-blog.user').controller('registerController', function ($scope, $location, users) {

  $scope.user = {};

  $scope.register = function (user) {
    if(valid(user)){
      users.register(user);

      $location.path('login');
    }else{
      alert('Invalid User');
    }

  };

  var valid = function (user) {
    return user.name && user.login && user.password;
  }

});
