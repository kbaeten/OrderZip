var app = angular.module("orderZip", ['angularMoment', 'ngAnimate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'apiController'
      // controller: "signInController"
    })
    .when('/route', {
      templateUrl: 'views/route.html',
      controller: 'apiController'
    })
    .when('/account/:id', {
      templateUrl: 'views/accountInfo.html',
      controller: 'apiController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('apiController', ['$scope', '$http', function($scope, $http){
  $scope.view = {};
  $http({
    method: "GET",
    url: "/api",
  })
  .then(function(data){
    $scope.view.accountBeers = data.data;
    // console.log($scope.view.accountBeers);
  })
  $http({
    method: "GET",
    url:"/beers"
  })
  .then(function(data){
    $scope.view.beers = data.data;
    // console.log($scope.view.beers);
  })
  $http({
    method: "GET",
    url: "/accounts"
  })
  .then(function(data){
    $scope.view.accounts = data.data;
    // console.log($scope.view.accounts);
  })
  $http({
    method: "GET",
    url: "/account/:id"
  })
  .then(function(data){
    $scope.view.account = data;
    console.log(data);
  })
}])
