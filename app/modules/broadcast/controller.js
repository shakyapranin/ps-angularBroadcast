/**
 * Created by pranin on 5/8/16.
 */
'use strict';
var app = angular.module('Broadcast');

app.controller('BroadcastCtrl',['$scope',function($scope){
  $scope.message = 'This is just demo message2';
  $scope.hasStream = false;
  $scope.roomName = '';
  $scope.isBroadcasting = '';
  $scope.prepare = function prepare() {
    $scope.$broadcast('prepare');
  };
  $scope.start = function start() {
    $scope.$broadcast('start');
  };
  $scope.prepare();
}]);
