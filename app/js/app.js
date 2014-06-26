// Declare app level module
var dsDebtapp = angular.module('dsDebtapp', ['ui-router']);

dsDebtapp.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/homesum');
    $stateProvider
        .state('homesum', {
            url: '/homesum',
            templateUrl: '/partials/company-desc.html'
        })
        .state('financials',{url: '/financials',templateUrl:'company-fin.html'})
        .state('goals',{url: '/goals',templateUrl:'company-goals.html'})
        .state('owners',{url: '/owners',templateUrl:'company-owners.html'})
});
  //'ngRoute'
  //'dsDebtapp.filters',      //(this calls each of the filters) 
  //'dsDebtapp.services',     //
  //'dsDebtapp.directives',   //
  //'dsDebtapp.controllers'   //
  //]).
/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
