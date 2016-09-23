'use strict';
angular.module('controllers', [])

.controller('cardCtrl', [
  '$scope',
  '$stateParams',
  'StorageService',
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, StorageService) {

    $scope.currentDate = new Date().toDateString();

    $scope.species = {
      availableOptions: [
        {id: '1', name: 'Snapper'},
        {id: '2', name: 'Kahawai'},
        {id: '3', name: 'Kingfish'},
        {id: '4', name: 'Trevelly'},
        {id: '5', name: 'Blue Marlin'},
        {id: '6', name: 'Striped Marlin'},
        {id: '7', name: 'Black Marlin'},
        {id: '8', name: 'Mako Shark'},
        {id: '9', name: 'Blue Shark'},
        {id: '10', name: 'Tope Shark'},
        {id: '11', name: 'Albacore Tuna'},
        {id: '12', name: 'Skipjack Tuna'},
        {id: '13', name: 'Yellowfin Tuna'}
      ],
    };

    $scope.things = StorageService.getAll();
    $scope.user = StorageService.getUser();
    $scope.userName = StorageService.getUser();

    $scope.add = function (newThing) {
      StorageService.add(newThing);
      this.cardData = null; //clear form data
    };

    $scope.remove = function (thing) {
      StorageService.remove(thing);
    };

    $scope.names = StorageService.getAllNames();

    $scope.addName = function (newName) {
      StorageService.addName(newName);
    };

    $scope.removeName = function (name) {
      StorageService.removeName(name);
    };

    $scope.removeUser = function (name) {
      StorageService.removeUser(name);
    };
  //$scope.reset = function (thing) {
    //StorageService.reset();
  //};

  }])

.controller('w_CardCtrl', [
  '$scope',
  '$stateParams',
  'StorageService',
  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, StorageService) {

    $scope.things = StorageService.getAll();

    $scope.remove = function (thing) {
      StorageService.remove(thing);
    };


  }])

.controller('pendingCardsCtrl', [
  '$scope',
  '$stateParams',
  'StorageService',
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, StorageService) {

    $scope.things = StorageService.getAll();

    $scope.remove = function (thing) {
      StorageService.remove(thing);
    };

  //$scope.reset = function (thing) {
    //StorageService.reset();
  //};

  }])

.controller('completedCtrl', [
  '$scope',
  '$stateParams',
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.completedLists = [
      { species: 'SPECIES', weight: 'WEIGHT', date: 'DATE', id: 1 },
      { species: 'Snapper', weight: '10kg', date: '20/09/15', id: 2 },
      { species: 'Snapper', weight: '2.5kg', date: '10/10/10', id: 3 },
      { species: 'Black Marlin', weight: '104.6kg', date: '12/12/12', id: 4 },
      { species: 'Kahawai', weight: '1.75kg', date: '09/02/12', id: 5 },
      { species: 'Snapper', weight: '13kg', date: '03/04/09', id: 6 }
    ];


  }])

.controller('profileCtrl', [
  '$scope',
  '$stateParams',
  'StorageService', // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, StorageService) {

    $scope.names = StorageService.getAllNames();
    $scope.user = StorageService.getUser();

    $scope.addName = function (newName) {
      StorageService.addName(newName); //add name to storage
      alert('Thanks ' + newName.profileName + ' your profile has been added');//alert popup on submit
      this.userData = null; //clear form data
    };

    $scope.removeName = function (name) {
      StorageService.removeName(name);
    };

    $scope.addUser = function (newName) {
      StorageService.addUser(newName);
    };
    $scope.removeUser = function (name) {
      StorageService.removeUser(name);
    };

    $scope.reset = function (name) {
      StorageService.reset(name);
    };
  //$scope.reset = function (name) {
    //StorageService.reset();
  //};
    this.userName = {
      input: '',
      code: ''
    };

  }]);
