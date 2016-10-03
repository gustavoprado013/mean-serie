angular.module('agenda').controller("contatosCtrl", function ($scope, $http) {

  $scope.title = "Contatos"
  $scope.contato = {};
  $scope.contatos = [];
  $scope.message = {};

  var carregarContatos = function () {
    $http.get('/contatos').then(success, error);
  }

  $scope.remover = function (contato) {
    $http.delete('/contatos/' + contato._id).success(function (data) {
      $scope.message.text = data;
      carregarContatos();
    }).error(function (error) {
      console.log(error);
    })
  }

  var success = function (success) {
    $scope.contatos = success.data;
  }

  var error = function (error) {
    console.log(error);
  }

  carregarContatos();

});
