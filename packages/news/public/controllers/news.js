'use strict';

angular.module('mean.news').controller('NewsController', ['$scope', 'Global', 'News',
  function($scope, Global, News) {
    $scope.global = Global;
    $scope.package = {
      name: 'news'
    };
  }
]);
