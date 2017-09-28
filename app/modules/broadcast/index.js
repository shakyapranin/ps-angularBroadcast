/**
 * Created by pranin on 5/8/16.
 */
angular.module('Broadcast',['ui.router','SimpleWebRTC'])
  .config(function($stateProvider){
    $stateProvider.state(
      'broadcast',{
        url : '/',
        templateUrl : 'modules/broadcast/views/broadcast.html',
        controller : 'BroadcastCtrl',
      }
    );
  });
