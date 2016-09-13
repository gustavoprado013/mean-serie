angular.module('mean-blog.user', []);

angular.module('mean-blog.user').config(function ($routeProvider) {

  $routeProvider
    .when('/user/register', {
      controller: 'registerController',
      templateUrl: 'public/modules/user/register/view.html'
    })

    .when('/login', {
      controller: 'loginController',
      templateUrl: 'public/modules/user/register/view.html'
    })

});
