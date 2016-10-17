angular.module('agenda').controller('contatoCtrl', function ($scope, $routeParams, $http, $resource) {

  var Contato = $resource('/contatos/:id');

  $scope.contato = new Contato();

  var init = function (id) {

    if(!id)
      return;

      Contato.get({id: id},
        function (contato) {
          $scope.contato = contato;
        },
        function (error) {
          $scope.message = "Não foi possivel";
          console.log(error);
        });

  }

  $scope.salvar = function (contato) {
    $scope.contato.$save()
      .then(function () {
        $scope.message = "Contato Salvo!";
        $scope.contato = new Contato();
      })
      .catch(function (error) {
        $scope.message = "Não foi possivel salvar!"
        console.log(error);
      })
  }

  init($routeParams.id);
});
