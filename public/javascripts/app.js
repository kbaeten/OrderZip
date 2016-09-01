var app = angular.module("orderZip", ['angularMoment', 'ngAnimate', 'ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html'
    })
  }]);
