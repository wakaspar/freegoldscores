// MachinesIndexController.js //

/* this controller hits an endpoint on the pinballmap.com API and
returns a single pinball machine & its high scores at FreeGoldWatch, by .id. */

angular
  .module('freeGoldScores')
  .controller('MachineShowController', MachineShowController);

// MSC //
MachineShowController.$inject = ['$http', '$routeParams', '$location']
function MachineShowController($http, $routeParams, $location){

  var vm = this;
  var machineId = parseInt($routeParams.id);

  // GET MACHINE BY ID //
  $http({
    method: 'GET',
    url: 'http://pinballmap.com/api/v1/locations/2405/machine_details.json'
  }).then(function onSuccess(res){
    vm.machineList = res.data.machines;
    vm.machineList.forEach(function(machine){
      if (machine.id == machineId)
        vm.machine = machine;
    });
    console.log('current machine: ', vm.machine);

  }, function onError(res){
    console.log('failjax: ', res);
  }); // closes first $http


  // GET HIGH SCORES BY MACHINE ID //
  console.log('machineId: ', machineId);
  $http({
    method: 'GET',
    url: 'http://pinballmap.com//api/v1/machine_score_xrefs/' + 'machineId' + '.json'
  }).then(function onSuccess(res){
    console.log('high scores: ', res.data);
  }, function onError(res){
    console.log('failjax: ', res);
  }); // closes second $http

} // closes MachineShowController
