'use strict';

angular.module('mean.photos').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('all media', {
      url: '/photos/example',
      templateUrl: 'photos/views/index.html'
    });
  }
]);
