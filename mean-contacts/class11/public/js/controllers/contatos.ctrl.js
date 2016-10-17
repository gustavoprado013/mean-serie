angular.module('agenda').controller("contatosCtrl", function($scope, $resource){

  var Contatos = $resource('/contatos/:id');
  $scope.title = "Contatos";
  $scope.contatos = [];
  $scope.message = {};

  $scope.remover = function (contato) {
    Contatos.delete({id: contato._id}, carregarContatos, error);
  }
/*
  $scope.remover = function (contato) {
    $http.delete('contatos/' + contato._id).success(function (data) {
      $scope.message.text = data;
      carregarContatos();
    }).error(function (error) {
      console.log(error);
    })
  }*/

  var carregarContatos = function () {
    Contatos.query(success, error);
    //$http.get('/contatos').then(success, error);
  }

  var success = function (contato) {
    $scope.contatos = contato;
    //$scope.contatos = success.data;
  }

  var error = function (error) {
    console.log(error);
  }

  carregarContatos();
});
