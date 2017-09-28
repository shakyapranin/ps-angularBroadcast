/**
 * Created by pranin on 5/8/16.
 */
angular.module('Shared').directive("header",function(){
  return {
    restrict: 'A',
    templateUrl: 'includes/header.html',
    scope: true,
    transclude : false,
    controller: 'SharedCtrl'
  };
});
