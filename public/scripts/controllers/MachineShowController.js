// MachinesIndexController.js //
angular
  .module('freeGoldScores')
  .controller('MachineShowController', MachineShowController);

MachineShowController.$inject = ['$http', '$routeParams', '$location']
function MachineShowController($http, $routeParams, $location){
  console.log('ima bsc');
}
