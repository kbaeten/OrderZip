var app = angular.module("orderZip", ['angularMoment', 'ngAnimate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html'
    })
    .when('/route', {
      templateUrl: 'views/route.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
