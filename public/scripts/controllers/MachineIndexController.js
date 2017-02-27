// MachinesIndexController.js //
angular
  .module('freeGoldScores')
  .controller('MachineIndexController', MachineIndexController);

// MIC //
MachineIndexController.$inject = ['$http'];
function MachineIndexController($http){
  console.log("ima mic");
  var vm = this;

  /*$http({
    method: 'GET',
    url: 'http://pinballmap.com/api/v1/region/bayarea/location_machine_xrefs.json'
  }).then(function onSuccess(res){
    console.log('res: ', res.data);
    vm.machineList = res.data;
    console.log('machineList: ', machineList);
  }, function onError(res){
    console.log('failjax: ', res);
  });*/

} // closes MachineIndexController
