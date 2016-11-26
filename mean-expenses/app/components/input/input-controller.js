(function () {

  angular.module('app')
          .controller('InputController', ['$scope', '$http',
            function ($scope, $http) {

              $scope.inputs = [];
              $scope.load = load

              $scope.load()

              function load() {
                $http.get('/api/input')
                  .then(function (result) {

                      $scope.inputs = result.data

                    }, function (err) {

                      console.error(err)
                    })
              }
          }
        ])

})()
