'use strict';

angular.module('mean.team').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('team', {
      url: '/team/example',
      templateUrl: 'team/views/index.html'
    });
  }
]);
