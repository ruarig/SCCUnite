'use strict';

angular.module('mean.minutes').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('all minutes', {
      url: '/minutes',
      templateUrl: 'minutes/views/list.html'
    });
  }
]);
