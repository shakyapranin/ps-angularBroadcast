'use strict';

angular
  .module('broadcastApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Broadcast',
    'Watch',
    'Shared',
  ])
  .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise("/");
    //$locationProvider.html5Mode(true);

  });
