angular.module('mean-blog.user').controller('loginController', function ($scope, $location, users) {

  $scope.user = {};

  $scope.login = function (user) {

    var authUser = users.auth(user);

    if(authUser){
      $location.path('users/' + authUser.id + '/posts');
    }else{
      $scope.user = {};
      alert('Invalid');
    }
  }
})
