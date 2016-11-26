(function () {
  angular.module('app', ['ui.router'])
          .config(['$stateProvider', '$urlRouterProvider',

            function ($stateProvider, $urlRouterProvider) {

              var inputState = {
                name: 'inputs',
                url: '/inputs',
                templateUrl: 'app/components/input/input-list.html',
                controller: 'InputController'
              }

              $urlRouterProvider.otherwise('/')
              $stateProvider.state(inputState)
          }
        ])
})()
