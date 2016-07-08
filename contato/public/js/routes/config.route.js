angular.module('agenda').config(function ($routeProvider) {

  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'contatosCtrl'
  });

  $routeProvider.when('/contato', {
    templateUrl: 'partials/contato.html',
    controller: 'contatoCtrl'
  });

})
