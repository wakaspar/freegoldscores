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
  var gameId = parseInt($routeParams.id);
  vm.dataLoaded = false;

  // GET MACHINE BY ID TO POPULATE PAGE //
  $http({
    method: 'GET',
    url: 'http://pinballmap.com/api/v1/locations/2405/machine_details.json'
  }).then(function onSuccess(res){
    vm.machineList = res.data.machines;
    vm.machineList.forEach(function(machine){
      if (machine.id == gameId)
        vm.machine = machine;
    });
    console.log('current pin: ', vm.machine);

  }, function onError(res){
    console.log('failjax: ', res);
  }); // closes first $http


  // GET MACHINE ID FOR HIGH SCORES //
  console.log('gameId: ', gameId);
  $http({
    method: 'GET',
    url: 'http://pinballmap.com/api/v1/region/bayarea/location_machine_xrefs.json',
  }).then(function onSuccess(res){
    var data = res.data.location_machine_xrefs;
    data.forEach(function(pin){
      if((pin.location_id === 2405) && (pin.machine.id === gameId)){
        vm.pin = pin.id;
      }
    }); // closes data.forEach
    console.log('current pin from all of bay: ', vm.pin.id);

    // GET HIGH SCORES BY MACHINE ID //
    $http({
      method: 'GET',
      url: 'http://pinballmap.com/api/v1/machine_score_xrefs/'+ vm.pin + '.json'
    }).then(function onSuccess(res){
      console.log('highscoresjax', res.data);
      vm.highscores = res.data.machine_scores;
      vm.dataLoaded = true;


    }, function onError(res){
      console.log('hsfailsjax: ', res);
    }); // closes high scores $http


  }, function onError(res){
    console.log('failjax: ', res);
  }); // closes machine id $http

  // Allows for submission of high scores //
  vm.onSubmit = function(){
    console.log('high score submitted!');
  }


} // closes MachineShowController
