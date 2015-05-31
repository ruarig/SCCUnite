'use strict';

angular.module('mean.team').controller('TeamController', ['$scope', 'Global', 'Team',
  function($scope, Global, Team) {
    $scope.global = Global;
    $scope.package = {
      name: 'team'
    };
  }
]);
