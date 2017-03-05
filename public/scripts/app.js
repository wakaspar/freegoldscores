// app.js //
angular
  .module('freeGoldScores', ['ngRoute'])
  .config(config);

// CONFIG //
config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider){
  //console.log('angular works!');

  $routeProvider
    .when( '/', {
      templateUrl: '/views/templates/machineIndex.html',
      controller: 'MachineIndexController',
      controllerAs: 'mic'
    })
    .when( '/machine/:id', {
      templateUrl: '/views/templates/machineShow.html',
      controller: 'MachineShowController',
      controllerAs: 'msc'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
} // closes config
