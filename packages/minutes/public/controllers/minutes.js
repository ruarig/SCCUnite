'use strict';

angular.module('mean.minutes').controller('MinutesController', ['$scope', 'Global', 'Minutes',
  function($scope, Global, Minutes) {
    $scope.global = Global;
    $scope.package = {
      name: 'minutes'
    };
  }
]);
