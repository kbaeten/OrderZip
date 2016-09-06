var app = angular.module("orderZip", ['angularMoment', 'ngAnimate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
    })
    .when('/route', {
      templateUrl: 'views/route.html',
      controller: 'routesPageController'
    })
    .when('/account/:id', {
      templateUrl: 'views/accountInfo.html',
      controller: 'accountsInfoPageController'
    })
    .when('/order/:id', {
      templateUrl: 'views/orderPage.html',
      controller: 'orderPageController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('routesPageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.view = {};
  $http({
    method: "GET",
    url: "/accounts"
  })
  .then(function(data){
    $scope.view.accounts = data.data;
    // console.log($scope.view.accounts);
  })
}])
app.controller('accountsInfoPageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.view = {};
  $http({
    method: "GET",
    url: "account/" + $routeParams.id
  })
  .then(function(data){
    $scope.view.account = data.data;
  })
}])
app.controller('orderPageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.view = {};
  $http({
    method: "GET",
    url: "account/" + $routeParams.id
  })
  .then(function(data){
    $scope.view.account = data.data;
  })
  $http({
    method: "GET",
    url: "api/order/" + $routeParams.id
  })
  .then(function(data){
    $scope.view.accountInfo = data.data
    console.log($scope.view.accountInfo);
  })
  // $scope.view.orderQuantity = 5;
  // $scope.view.orderTotal = ;
}])
