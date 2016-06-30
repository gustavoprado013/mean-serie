angular.module('agenda').controller("contatosCtrl", function($scope){
  $scope.title = "Contato";
  $scope.contato = {};
  $scope.contatos = [];

  $scope.adicionar = function (contato) {
    $scope.contatos.push(contato);
    delete $scope.contato;
  }
});