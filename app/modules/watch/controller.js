/**
 * Created by pranin on 5/8/16.
 */
'use strict';
var app = angular.module('Watch');

app.controller('WatchCtrl',['$scope',function($scope){
  $scope.message = 'This is just demo message2';
  $scope.roomName = '';
  $scope.myEmail = '';
  $scope.joinedRoom = false;
  $scope.maxAllowedWatchers = 10;
  $scope.videoList = []; // initialize videoList variable to hold all videos coming to watch-room directive
  $scope.joinRoom = function () {
    $scope.$broadcast('joinRoom');
  };
  $scope.leaveRoom = function () {
    $scope.$broadcast('leaveRoom');
  };
}]);
