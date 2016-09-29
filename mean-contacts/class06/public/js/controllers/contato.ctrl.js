angular.module('agenda').controller('contatoCtrl', function ($scope, $routeParams) {

  var contatos = [
    {_id: 1, name: "contato1", email: "email1@email.com"},
    {_id: 2, name: "contato2", email: "email1@email.com"},
    {_id: 3, name: "contato3", email: "email1@email.com"},
    {_id: 4, name: "contato4", email: "email1@email.com"},
    {_id: 5, name: "contato5", email: "email1@email.com"},
    {_id: 6, name: "contato6", email: "email1@email.com"}
  ];

  var init = function (parametro) {
    $scope.contato = contatos.filter(function (cont) {
      return cont._id == parametro;
    })[0];
  }
  init($routeParams.id);
});
