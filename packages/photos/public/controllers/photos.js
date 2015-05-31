'use strict';

angular.module('mean.photos').controller('PhotosController', ['$scope', '$rootScope','Global', 'Photos',
  function($scope, $rootScope, Global, Photos) {
    $scope.global = Global;
    $scope.package = {
      name: 'photos'
    };

    $scope.hasAuthorization = function(photo) {
      if (!photo || !photo.user) return false;
      return $scope.global.isAdmin || photo.user._id === $scope.global.user._id;
    };
	 
	  $rootScope.$on('loggedin', function() {

      $scope.global = {
        authenticated: !! $rootScope.user,
        user: $rootScope.user
  	  };
    });

	// $scope.loadmodal = function() {
 //       $('li img').on('click',function(){
 //            var src = $scope.attr('src');
 //            var img = '<img src="' + src + '" class="img-responsive"/>';
 //            $scope.modal();
 //            $scope.on('shown.bs.modal', function(){
 //                $scope.html(img);
 //            });
 //            $scope.on('hidden.bs.modal', function(){
 //                $scope.html('');
 //            });
 //       });  
 //    }
  }
]);
