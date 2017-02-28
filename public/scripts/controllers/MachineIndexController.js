// MachinesIndexController.js //

/* this controller hits an endpoint on the pinballmap.com API and
returns an array of all the machines at FreeGoldWatch, according
to PinballMap's database. */

angular
  .module('freeGoldScores')
  .controller('MachineIndexController', MachineIndexController);

// MIC //
MachineIndexController.$inject = ['$http'];
function MachineIndexController($http){
  console.log("ima mic");
  var vm = this;
  vm.machineList = [];

  $http({
    method: 'GET',
    url: 'http://pinballmap.com/api/v1/locations/2405/machine_details.json'
  }).then(function onSuccess(res){
    // gets all machines //
    vm.machineList = res.data.machines;
    console.log(vm.machineList);
  }, function onError(res){
    console.log('failjax: ', res);
  });

} // closes MachineIndexController
