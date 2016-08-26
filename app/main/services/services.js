'use strict';
angular.module('services', [])

// create a new factory
.factory('StorageService', function ($localStorage) {

  $localStorage = $localStorage.$default({
    things: [],
    names: []
  });

  var _getAll = function () {
    return $localStorage.things;
  };

  var _getAllNames = function () {
    return $localStorage.names;
  };

  var _add = function (thing) {
    $localStorage.things.push(thing);
  };

  var _addName = function (name) {
    $localStorage.names.push(name);
  };


  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  };

  var _removeName = function (name) {
    $localStorage.names.splice($localStorage.names.indexOf(name), 1);
  };

  var _reset = function () {
    $localStorage.$reset();
  };

  return {
    getAll: _getAll,
    getAllNames: _getAllNames,
    add: _add,
    addName: _addName,
    remove: _remove,
    removeName: _removeName,
    reset: _reset
  };
})


.service('dataService', function (data) {
  var cache;
  this.saveData = function (data) {
    cache = data;
  };

  this.retrieveData = function () {
    return cache;
  };
});
