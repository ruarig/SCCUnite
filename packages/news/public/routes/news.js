'use strict';

angular.module('mean.news').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('news example page', {
      url: '/news/example',
      templateUrl: 'news/views/index.html'
    });
  }
]);
