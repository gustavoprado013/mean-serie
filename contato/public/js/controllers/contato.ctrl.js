angular.module('agenda').controller('contatoCtrl', function ($scope, $routeParams, $http) {

  $scope.salvar = function (contato) {
    $http.post('/contatos', contato).success(success).error(error);
  }

  var success = function (data) {
    console.log(data);
  }

  var error = function (data) {
    console.log(data);
  }

});
