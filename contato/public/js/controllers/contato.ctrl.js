angular.module('agenda').controller('contatoCtrl', function ($scope, $routeParams) {

  var contatos = [
    {_id: 1, nome: "Contato1", email: "contato1@email.com"},
    {_id: 2, nome: "Contato2", email: "contato2@email.com"},
    {_id: 3, nome: "Contato3", email: "contato3@email.com"},
  ];

  var init = function (param) {
    $scope.contato = contatos.filter(function (cont) {
      return cont._id == param;
    })[0];
  }

  init($routeParams.id);
});
