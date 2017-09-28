/**
 * Created by pranin on 5/8/16.
 */
angular.module('Watch',['ui.router','SimpleWebRTC'])
  .config(function($stateProvider){
    $stateProvider.state(
      'watch',{
        url : '/',
        templateUrl : 'modules/watch/views/watch.html',
        controller : 'WatchCtrl',
      }
    );
  });

